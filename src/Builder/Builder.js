import React from 'react';
import './Builder.css';
import DropdownContainer from '../DropdownContainer/DropdownContainer';

export const Builder = props => {

  const menus = props.forms.map(form => (<DropdownContainer title={form} />));

  return <section className="builder">{menus}</section>
}
