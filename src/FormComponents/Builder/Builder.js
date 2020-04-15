import React from 'react';
import './Builder.css';
import DropdownContainer from '../DropdownContainer/DropdownContainer';

export const Builder = props => {

  const getItems = async () => {
    const email = document.querySelector('.preview').outerHTML;
    await navigator.clipboard.writeText(email);
  }

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
      <button className="export" onClick={() => getItems()}>Export</button>
      <button className="analyze">Analyze Message</button>
    </div>
  </section>
  )
}
