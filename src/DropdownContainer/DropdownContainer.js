import React from 'react';
import './DropdownContainer.css';

export default class DropdownContainer extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="dropdown-container">
        <div className="title-wrapper">
          <input type="checkbox" className="visibility-toggle" checked/>
          {this.props.title}
        </div>
        <p className="dropdown-toggle">+</p>
      </div>)
  }
}
