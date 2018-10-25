import React from 'react';

import PokemonList from './pokemon-list';

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <h1>Dashboard Component</h1>
        <PokemonList />
      </div>
    );
  }
}

export default Dashboard;