import React from 'react';
import './DropdownContainer.css';
import Dropdown from '../Dropdown/Dropdown';
import { connect } from 'react-redux';
import { toggleVisibility } from '../../actions';

class DropdownContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      active: true,
      dropdown: false,
    }
  }

  toggleChecked = (e) => {
    this.props.toggleVisibility({[this.props.title]: !this.props.active})
  }

  toggleDropdown = (e) => {
    this.setState({dropdown: !this.state.dropdown});
  }

  render() {
    return (
      <div className="dropdown-wrapper">
        <div className="dropdown-container">
          <div className="title-wrapper">
            <input type="checkbox" className="visibility-toggle" onClick={() => this.toggleChecked()} defaultChecked/>
            {this.props.title}
          </div>
          <p className="dropdown-toggle" onClick={() => this.toggleDropdown()}>+</p>
        </div>
        <Dropdown
          dropdown={this.state.dropdown}
          formItems={this.props.formItems}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleVisibility: (title, bool) => dispatch(toggleVisibility(title, bool))
})

const mapStateToProps = (state, ownProps) => {
  return {active: state.visibility[ownProps.title]}
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownContainer);
