import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main id="homepage">
      <Link
        to="/rick-and-morty/character"
        className="link"
      >
        {'Get Characters'}
      </Link>
    </main>
  );
}

export default Home;