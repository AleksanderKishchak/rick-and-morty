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

export default getFormattedCreatedTime;
