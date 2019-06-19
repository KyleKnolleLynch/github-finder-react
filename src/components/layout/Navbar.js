import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navIcon, title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={navIcon} />
        {title}
      </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Github finder',
  navIcon: 'fab fa-github px'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  navIcon: PropTypes.string.isRequired
};

export default Navbar;
