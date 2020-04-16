import React from 'react';
import './Builder.css';
import DropdownContainer from '../DropdownContainer/DropdownContainer';
import Analyzer from '../Analyzer/Analyzer';
import Exporter from '../Exporter/Exporter';

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
      <Exporter />
      <Analyzer />
    </div>
  </section>
  )
}
