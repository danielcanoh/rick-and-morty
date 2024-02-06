import { CharacterInfo } from './';

export const Character = ({ character, onSelected }) => {
  return (
    <li className="character" onClick={() => onSelected(character)}>
      <CharacterInfo character={character} />
    </li>
  );
};
