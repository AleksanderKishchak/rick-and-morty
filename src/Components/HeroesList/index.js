import React, { Component } from 'react';
import HeroCard from '../HeroCard';
import './HeroesList.sass';


class HeroesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    this.getHeroes();
  }

  getHeroes() {
    fetch('https://rickandmortyapi.com/api/character/?page=21')
      .then(response => response.json())
      .then(response => {
        const heroesList = response.results.map(hero => {
          const {
            id,
            name,
            status,
            species,
            gender,
            origin,
            location,
            image,
            created
          } = hero;

          return {
            id,
            name,
            status,
            species,
            gender,
            origin,
            location,
            image,
            created
          };
        });

        this.setState(state => ({
          characters: [...state.characters, ...heroesList]
        }));
      });
  }

  render() {
    const { characters } = this.state;
    const rows = characters.map(character => (
      <HeroCard
        character={character}
        key={character.id}
      />
    ));

    return (
      <div className="heroes-list">
        {rows}
      </div>
    );
  }
}

export default HeroesList;
