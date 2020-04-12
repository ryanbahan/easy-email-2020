import React from 'react';
import './Dropdown.css';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  getFormItems = () => {
    return this.props.formItems.map(item =>
      (
        <div className="form-item" key={item}>{item}</div>
      )
    );
  }

  render() {
    return (
      <div className={this.props.dropdown ? "dropdown" : "hidden dropdown"}>
        {this.getFormItems()}
      </div>
    )
  }
}
