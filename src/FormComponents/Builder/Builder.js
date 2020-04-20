import React from 'react';
import './Builder.css';
import DropdownContainer from '../DropdownContainer/DropdownContainer';
import { Link } from 'react-router-dom';
import Exporter from '../Exporter/Exporter';
import PropTypes from 'prop-types';

export const Builder = ({ menus }) => {

  const menuContainers = menus.map(menu => (
    <DropdownContainer
      key={menu.title}
      formItems={menu.formItems}
      title={menu.title}
    />
  ));

  return (
  <section className="builder">
    <div className="menu-containers-wrapper">
      {menuContainers}
    </div>
    <div className="buttons-wrapper">
      <Exporter />
      <Link to="/tone-analysis">
        <button>Analyze Tone</button>
      </Link>
    </div>
  </section>
  )
}

Builder.propTypes = {
  menus: PropTypes.array,
}
