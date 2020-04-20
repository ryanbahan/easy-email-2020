import React from 'react';
import { connect } from 'react-redux';
import { update } from '../../actions';
import './TextField.css';
import PropTypes from 'prop-types';

class TextField extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      content: '',
    }
  }

  toggleModal = (e) => {
    this.setState({active: !this.state.active})
  }

  handleFormInput = (e) => {
    this.setState({content: e.target.value});
  }

  update = (store, content) => {
    this.props.update({[store]: content});
  }

  render() {
    return (
          <>
          <button className="text-field-btn" onClick={() => this.toggleModal()}>
            Edit
          </button>
          <div className={this.state.active ? "modal-wrapper" : "hidden"}>
            <div className="modal">
              <textarea type="text" onChange={this.handleFormInput}/>
              <button
                onClick={() => this.update(this.props.store, this.state.content)}
              >
                Submit
              </button>
            </div>
          </div>
          </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  update: content => dispatch(update(content))
})

TextField.propTypes = {
  store: PropTypes.string,
  update: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(TextField);
