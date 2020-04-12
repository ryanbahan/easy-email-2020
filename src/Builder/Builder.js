import React from 'react';
import './Builder.css';
import DropdownContainer from '../DropdownContainer/DropdownContainer';

export const Builder = props => {

  const menuContainers = props.menuTitles.map(menuTitle => (<DropdownContainer title={menuTitle} />));

  return <section className="builder">{menuContainers}</section>
}
