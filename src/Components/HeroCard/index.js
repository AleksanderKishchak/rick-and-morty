import React from 'react';
import { PropTypes } from 'prop-types';
import './HeroCard.sass';

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

function getFormattedCreatedTime(timeString) {
  const timestamp = new Date(timeString).getTime();
  const timeDifference = Date.now() - timestamp;
  const msInYear = 31536000000;
  const msInMonths = 2592000000;
  let formattedTimeString;

  if (timeDifference > msInYear) {
    const pastYears = parseInt(timeDifference / msInYear, 10);

    if (pastYears === 1) {
      formattedTimeString = 'created a year ago';
    } else {
      formattedTimeString = `created ${pastYears} years ago`;
    }
  } else if (timeDifference > msInMonths) {
    const pastMonths = parseInt(timeDifference / msInMonths, 10);

    if (pastMonths === 1) {
      formattedTimeString = 'created a month ago';
    } else {
      formattedTimeString = `created ${pastMonths} months ago`;
    }
  } else {
    formattedTimeString = 'created recently';
  }

  return formattedTimeString;
}

function HeroCard(props) {
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
  } = props.character;
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
