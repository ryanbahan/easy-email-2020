import React from 'react';
import { connect } from 'react-redux';
import { update } from '../../utils/actions';
import './TextField.css';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class TextField extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    }
  }

  toggleModal = (e) => {
    this.setState({active: !this.state.active})
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
              <ReactQuill theme="snow" value={this.props.content} onChange={(value) => this.update(this.props.store, value)}/>
            </div>
          </div>
        </>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  content: state.form[ownProps.store],
})

const mapDispatchToProps = dispatch => ({
  update: content => dispatch(update(content))
})

TextField.propTypes = {
  store: PropTypes.string,
  update: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
