import { useEffect, useState } from 'react';

export const useSelected = (character = {}) => {
  const [episode, setEpisode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        setIsLoading(true);
        setError('');
        const res = await fetch(character.episode[0]);

        if (!res.ok)
          throw new Error(
            'No se encontró información del personaje seleccionado'
          );

        const data = await res.json();
        setEpisode(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEpisode();
  }, [character]);

  return { episode, isLoading, error };
};
