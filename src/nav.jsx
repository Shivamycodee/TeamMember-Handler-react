import {Link} from 'react-router-dom';
import React from 'react';

const nav = ()=>{
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/GroupTeamMemebers">
              Teams
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default nav;