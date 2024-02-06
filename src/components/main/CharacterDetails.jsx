import { CharacterInfo, CharacterDetailsEpisode, Message } from './';
import { useSelected } from '../../hooks';

export const CharacterDetails = ({ character }) => {
  const { episode, isLoading, error } = useSelected(character);

  if (isLoading) return <Message>Cargando...</Message>;

  if (error) return <Message>⛔ {error}</Message>;

  return (
    <article className="character-details">
      <section className="main-details">
        <div className="main-details-info">
          <CharacterInfo character={character}>
            <div className="main-details-selected">
              <h3>Última ubicación conocida:</h3>
              <p>{character?.location?.name}</p>
            </div>
          </CharacterInfo>
        </div>
      </section>
      <CharacterDetailsEpisode episode={episode} />
    </article>
  );
};
