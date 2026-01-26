import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(props) {
  return (
    <nav className="navi">
      <ul>
        <li><Link to='/movie/' title="홈으로">Home</Link></li>
        <li><Link to='/movie/api' title="영화api 페이지">API</Link></li>
        <li><Link to='/movie/contact' title="문의하기">Contact US</Link></li>
        <li><Link to='/movie/router' title="리액트에서 라우터 설정 방법과 활용">Router</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;