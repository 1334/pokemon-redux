import React from 'react';

class Pokemon extends React.Component {
  pokemon = this.props.pokemon;

  render () {
    return (
      <p>{this.pokemon}</p>
    );
  }
}

export default Pokemon;