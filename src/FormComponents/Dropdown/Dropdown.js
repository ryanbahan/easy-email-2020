import React from 'react';
import './Dropdown.css';
import Colorpicker from '../Colorpicker/ColorPicker';
import FileUploader from '../FileUploader/FileUploader';
import TextField from '../TextField/TextField';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  getFormComponent = (component) => {
    switch (component) {
      case "Colorpicker":
        return <Colorpicker />
        break;
      case "TextField":
        return <TextField />
        break
      case "FileUploader":
        return <FileUploader />
        break
    }
  }

  getFormItems = () => {
    return this.props.formItems.map(item =>
      ( <div className="form-item" key={item.title}>
          <div className="form-title-wrapper">
            <input type="checkbox" defaultChecked/>
            <p className="form-item-title">{item.title}</p>
          </div>
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
