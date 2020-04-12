import React from 'react';
import './Dropdown.css';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return <div className={this.props.dropdown ? "dropdown" : "hidden dropdown"}>test</div>
  }
}
