import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      const fetchedPokemons = await Promise.all(
        res.data.results.map(async (pokemon) => {
          const pokeData = await axios.get(pokemon.url);
          return pokeData.data;
        })
      );
      setPokemons(fetchedPokemons);
    };

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1>Pokemon Search</h1>
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />
      <div style={styles.grid}>
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  input: {
    padding: '10px',
    width: '300px',
    marginBottom: '20px',
    fontSize: '16px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default App;
