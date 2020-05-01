import React from 'react';
import { connect } from 'react-redux';
import { update, hasWarning, clearWarning } from '../../../../utils/actions';
import './TextField.css';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import WarningModal from '../../../WarningModal/WarningModal';
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
    if (content.length > this.props.constraints.maxLength) {
      this.props.hasWarning({
        store: this.props.store,
        warning: "Warning: Your content exceeds the Maximum suggested length for this section."
      });
    } else {
      this.props.clearWarning();
    }

    this.props.update({[store]: content});
  }

  render() {
    return (
        <>
          <button className="text-field-btn" onClick={() => this.toggleModal()} >
            Edit
          </button>
          <div className={this.state.active ? "modal-wrapper" : "hidden"}>
            <div className="modal" style={{position: "relative"}}>
              <ReactQuill theme="snow" value={this.props.content} onChange={(value) => this.update(this.props.store, value)}/>
              {this.props.warning === this.props.store && <WarningModal />}
            </div>
          </div>
        </>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  content: state.form[ownProps.store],
  warning: state.warning.store,
})

const mapDispatchToProps = dispatch => ({
  update: content => dispatch(update(content)),
  hasWarning: warning => dispatch(hasWarning(warning)),
  clearWarning: () => dispatch(clearWarning()),
})

TextField.propTypes = {
  store: PropTypes.string,
  update: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
