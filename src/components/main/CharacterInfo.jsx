const status = {
  alive: 'alive',
  dead: 'dead',
  unknown: 'unknown',
};

export const CharacterInfo = ({ character, children }) => {
  const characterStatus = status[character?.status?.toLowerCase()];

  return (
    <>
      <div className="character-image">
        <img
          src={character?.image}
          alt={`Imagen de ${character?.name} de la serie Rick and Morty`}
        />
      </div>
      <section className="character-info">
        <div>
          <h2>{character?.name}</h2>
          <p className="character-status">
            <span className={characterStatus}></span> {character?.status} -{' '}
            {character?.species}
          </p>
        </div>
        {children}
      </section>
    </>
  );
};
