import React from 'react';
import { connect } from 'react-redux';
import { update, hasWarning, clearWarning } from '../../../../utils/actions';
import './ButtonCopyField.css';
import PropTypes from 'prop-types';
import WarningModal from '../../../WarningModal/WarningModal';

class ButtonCopyField extends React.Component {
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
        store: this.props.store, warning: "Warning: Your content exceeds the maximum suggested length for this section."
      });
    } else {
      this.props.clearWarning();
    }

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
              <input type="text"
                style={{padding: "0.25rem 0 0.25rem 0.25rem", width: "calc(100% - 0.25rem)"}}
                value={this.props.content}
                onChange={(e) => this.update(this.props.store, e.target.value)}
              />
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

ButtonCopyField.propTypes = {
  store: PropTypes.string,
  update: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCopyField);
