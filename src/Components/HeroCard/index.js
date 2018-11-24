import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './HeroCard.sass';

/*eslint-disable*/

function InfoItem({ field, text }) {
  return (
    <div className="info-item">
      <span className="field">{field}</span>
      <span className="text">{text}</span>
    </div>
  );
}

InfoItem.propTypes = {
  field: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

class HeroCard extends Component {
  render() {
    const {
      id,
      name,
      status,
      species,
      gender,
      origin,
      location,
      image
    } = this.props.character;

    return (
      <div className="card">
        <div className="card-header">
          <img 
            src={image} 
            alt={name} 
            className="header-image" 
          />
          <div className="header-info">
            <div className="hero-name">{name}</div>
            <div className="small-text">id: {id} - created a year ago</div>
          </div>
        </div>
        <div className="card-info">
          <InfoItem 
            field="status"
            text={status}
          />
          <InfoItem 
            field="species"
            text={species}
          />
          <InfoItem 
            field="gender"
            text={gender}
          />
          <InfoItem 
            field="origin"
            text={origin.name}
          />
          <InfoItem 
            field="last location"
            text={location.name}
          />
        </div>
      </div>
    );
  }
}

export default HeroCard;
