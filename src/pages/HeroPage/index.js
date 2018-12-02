
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import HeroCard from '../../Components/HeroCard';
import { getHeroById } from '../../common/APIcalls';
import './HeroPage.sass';

class HeroPage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      character: null
    };
  }
  
  componentDidMount() {
    const { params: {id} } = this.props.match; 
    getHeroById(id)
      .then(characterInfo => {
        this.setState({
          character: characterInfo
        });
      });
  }

  render() {
    const { character } = this.state;
    const id = this.props.match.params.id;
    return (
      <div className="hero-page">
        {
          character ? 
            <HeroCard character={character} /> : 
            `Hero with id '${id}' not found!`
        }
      </div>
    );
  }
}
export default HeroPage;
