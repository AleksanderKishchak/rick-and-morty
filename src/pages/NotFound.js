import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <img
        src="https://cdn4.iconfinder.com/data/icons/online-store/300/404-512.png" 
        alt="404 not found"
      />
      <Link
        to="/"
        className="link"
      >
        Go Home
      </Link>
    </>
  );
}

export default NotFound;