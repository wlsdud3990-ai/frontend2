import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';

function Header(props) {
  return (
    <header className="header">
      <h1>
        <Link to='/movie/'>
          <img src={`${process.env.PUBLIC_URL}/images/logo-YTS.svg`} alt="yts영화사이트 로고" />
        </Link>
      </h1>

      <Navigation />

    </header>
  );
}

export default Header;