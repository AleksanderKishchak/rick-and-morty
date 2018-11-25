import React from 'react';
import { PropTypes } from 'prop-types';
import './HeroCard.sass';
import getFormattedCreatedTime from '../../common/DateFormatting';

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

function HeroCard({
  character: {
    id,
    name,
    status,
    species,
    gender,
    origin,
    location,
    image,
    created
  }
}) {
  const timeString = getFormattedCreatedTime(created);

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
          <div className="small-text">id: {id} - {timeString}</div>
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

HeroCard.propTypes = {
  character: PropTypes.object.isRequired
};

export default HeroCard;
