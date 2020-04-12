import React from 'react';
import './Dropdown.css';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  getFormComponent = (component) => {
    console.log(component);
  }

  getFormItems = () => {
    return this.props.formItems.map(item =>
      ( <div className="form-item" key={item.title}>
          <input type="checkbox" defaultChecked/>
          <p className="form-item-title">{item.title}</p>
          {this.getFormComponent(item.component)}
        </div>
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
