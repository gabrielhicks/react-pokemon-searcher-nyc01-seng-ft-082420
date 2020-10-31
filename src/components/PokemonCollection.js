import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemon = () => {
    let currentPokemon = this.props.pokemon
    return currentPokemon.map(poke => <PokemonCard pokemon={poke} />)
  }
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
