import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div style={styles.card}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} style={styles.image} />
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    width: '150px',
  },
  image: {
    width: '120px',
    height: '120px',
  },
};

export default PokemonCard;
