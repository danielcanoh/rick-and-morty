import { Character } from './';

export const CharactersList = ({ characters = [], onSelected }) => {
  return (
    <ul className="characters-list">
      {characters.map((character) => (
        <Character
          key={character.id}
          character={character}
          onSelected={onSelected}
        />
      ))}
    </ul>
  );
};
