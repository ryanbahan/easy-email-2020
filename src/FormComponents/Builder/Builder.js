import React from 'react';
import './Builder.css';
import DropdownContainer from '../DropdownContainer/DropdownContainer';

export const Builder = props => {

  const getItems = async () => {
    const email = document.querySelector('.preview').outerHTML;
    await navigator.clipboard.writeText(email);

    const data = {toneInput: {text: "some text"}}

    fetch("http://localhost:3000/api/tone", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    }).then(res => res.json()).then(data => console.log(data))
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
