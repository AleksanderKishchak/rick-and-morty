import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import HeroCard from '../HeroCard';
import './HeroesList.sass';

class HeroesList extends Component {
  static propTypes = {
    characters: PropTypes.array,
    currentPage: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    lastPage: PropTypes.number.isRequired,
  }

  componentDidUpdate() {
    this.scrollToTop();
  }

  handleClick = e =>  {
    const { currentPage, lastPage, handlePageChange } = this.props;
    let newPage;
    
    if(e.target.name === 'prev') {
      newPage = currentPage > 1 ? currentPage - 1 : 1;
    } else {
      newPage = currentPage >= lastPage ? lastPage : currentPage + 1;
    }

    handlePageChange(newPage);
  }

  scrollToTop = () => {
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    })
  }

  render() {
    const { currentPage, lastPage, characters } = this.props;
    const rows = characters.map(character => (
      <Link
        to={`/character/${character.id}`}
        key={character.id}
        style={{
          textDecoration: 'none'
        }}
      >
        <HeroCard character={character} />
      </Link>
    ));

    return (
      <main id="list">
        <div className="heroes-list">
          {rows.length > 0 ? rows : 'Heroes not found'}
        </div>
        <div className="navigation">
          <button
            disabled={ currentPage <= 1} 
            className="prev" 
            name="prev" 
            onClick={this.handleClick}
          >
            Previous page
          </button>
          <button 
            disabled={ currentPage >= lastPage}
            className="next" 
            name="next" 
            onClick={this.handleClick}
          >
            Next page
          </button>
        </div>
      </main>
    );
  }
}

export default HeroesList;
