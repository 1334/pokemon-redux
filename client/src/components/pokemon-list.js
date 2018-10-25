import React from 'react';

import Pokemon from './pokemon';

class PokemonList extends React.Component {
  render () {
    return (
      <div>
        <h2>Pokemon list in place</h2>
        {items.map(pokemon => <Pokemon pokemon={pokemon} />)}
      </div>
    );
  }
}

const items = [1,2,3,4,5];

export default PokemonList;