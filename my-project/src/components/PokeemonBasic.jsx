import { useState, useEffect } from 'react';

export function PokemonBasic() {
  const [pokemon, setPokemon] = useState(null);

  const fetchRandomPokemon = () => {
    // ID aleatorio entre 1 y 1025
    const randomId = Math.floor(Math.random() * 1025) + 1;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  };

  // Carga un Pokémon al montar el componente
  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Ejemplo 1: Fetch básico</h2>

      {pokemon ? (
        <div>
          <h3>#{pokemon.id} - {pokemon.name.toUpperCase()}</h3>
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default} 
            alt={pokemon.name} 
            width={150} 
          />
        </div>
      ) : (
        <p>Cargando Pokémon...</p>
      )}

      <button onClick={fetchRandomPokemon} style={{ marginTop: '10px' }}>
        ¡Obtener Pokémon Aleatorio!
      </button>
    </div>
  );
}