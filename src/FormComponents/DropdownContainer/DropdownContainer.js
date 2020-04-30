import React from 'react';
import './DropdownContainer.css';
import Dropdown from '../Dropdown/Dropdown';
import { connect } from 'react-redux';
import { toggleVisibility } from '../../utils/actions';
import PropTypes from 'prop-types';

class DropdownContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdown: false,
    }
  }

  toggleChecked = (e) => {
    this.props.toggleVisibility({[this.props.title]: !this.props.active})
  }

  toggleDropdown = (e) => {
    console.log('test');
    this.setState({dropdown: !this.state.dropdown});
  }

  render() {
    return (
      <div className="dropdown-wrapper">
        <div className="dropdown-container">
          <div className="title-wrapper">
            <input type="checkbox" className="visibility-toggle" onClick={() => this.toggleChecked()} defaultChecked={this.props.active} />
            <h4 style={{fontWeight: "500", fontSize: "1.1rem", padding: "0", margin: "0"}}>{this.props.title}</h4>
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

const mapStateToProps = (state, ownProps) => ({
  active: state.visibility[ownProps.title]
})

DropdownContainer.propTypes = {
  formItems: PropTypes.array,
  title: PropTypes.string,
  active: PropTypes.bool,
  toggleVisibility: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownContainer);
