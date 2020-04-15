import React from 'react';
import './Builder.css';
import DropdownContainer from '../DropdownContainer/DropdownContainer';

export const Builder = props => {

  const menuContainers = props.menus.map(menu => (
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
      <button className="export">Export</button>
      <button className="analyze">Analyze Message</button>
    </div>
  </section>
  )
}
