import React from 'react';
import './Dropdown.css';
import Colorpicker from '../Colorpicker/ColorPicker';
import FileUploader from '../FileUploader/FileUploader';
import TextField from '../TextField/TextField';
import ButtonCopyField from '../ButtonCopyField/ButtonCopyField';
import PropTypes from 'prop-types';

export default class Dropdown extends React.Component {

  getFormComponent = (item) => {
    switch (item.component) {
      case "ButtonCopyField":
        return <ButtonCopyField store={item.store} />
      case "Colorpicker":
        return <Colorpicker store={item.store} />
      case "TextField":
        return <TextField store={item.store} />
      case "FileUploader":
        return <FileUploader store={item.store} />
      default:
        return null;
    }
  }

  getFormItems = () => {
    return this.props.formItems.map(item =>
      ( <div className="form-item" key={item.title}>
          <div className="form-title-wrapper">
            <p style={{fontSize: "0.85rem", marginLeft: "0.25rem"}}>{item.title}</p>
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

Dropdown.propTypes = {
  dropdown: PropTypes.bool,
  formItems: PropTypes.array,
}
