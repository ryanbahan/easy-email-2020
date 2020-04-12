import React from 'react';
import './DropdownContainer.css';

export default class DropdownContainer extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return <div className="dropdown-container">{this.props.title}</div>
  }
}
