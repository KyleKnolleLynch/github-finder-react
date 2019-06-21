import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ navIcon, title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={navIcon} />
        <Link to="/">{title}</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'GitHub Finder',
  navIcon: 'fab fa-github px'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  navIcon: PropTypes.string.isRequired
};

export default Navbar;
