import React from 'react';
import './Dropdown.css';
import Colorpicker from '../Colorpicker/ColorPicker';
import FileUploader from '../FileUploader/FileUploader';
import TextField from '../TextField/TextField';

export default class Dropdown extends React.Component {

  getFormComponent = (item) => {
    switch (item.component) {
      case "Colorpicker":
        return <Colorpicker store={item.store} />
        break
      case "TextField":
        return <TextField store={item.store} />
        break
      case "FileUploader":
        return <FileUploader store={item.store} />
        break
      default:
        return null;
    }
  }

  getFormItems = () => {
    return this.props.formItems.map(item =>
      ( <div className="form-item" key={item.title}>
          <div className="form-title-wrapper">
            {item.title && <input type="checkbox" defaultChecked/>}
            <p className="form-item-title">{item.title}</p>
          </div>
          {this.getFormComponent(item)}
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
