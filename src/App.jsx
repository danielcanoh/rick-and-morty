import { useState } from 'react';
import {
  Box,
  CharacterDetails,
  CharactersList,
  Main,
  Message,
} from './components/main';
import { Navbar, Search } from './components/navbar';
import { useCharacters } from './hooks';

function App() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const { characters, isLoading, error } = useCharacters(query);

  return (
    <div className="container">
      <Navbar>
        <Search query={query} onQuery={setQuery} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Message>Cargando...</Message>}
          {error && <Message>⛔ {error}</Message>}
          {!isLoading && !error && (
            <CharactersList characters={characters} onSelected={setSelected} />
          )}
        </Box>
        <Box>{selected && <CharacterDetails character={selected} />}</Box>
      </Main>
    </div>
  );
}

export default App;
