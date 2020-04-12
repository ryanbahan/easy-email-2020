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

  return <section className="builder">{menuContainers}</section>
}
