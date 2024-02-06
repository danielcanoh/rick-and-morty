import { useEffect, useState } from 'react';

export const useCharacters = (query) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        setError('');
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?name=${query}`,
          { signal: abortController.signal }
        );

        if (!res.ok) throw new Error('No se ha encontrado ningún personaje');

        const data = await res.json();
        setCharacters(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (!query.length) {
      setCharacters([]);
      setError('');
      return;
    }

    fetchCharacters();

    return () => {
      abortController.abort();
    };
  }, [query]);

  return { characters, isLoading, error };
};
