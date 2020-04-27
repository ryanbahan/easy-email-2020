import React from 'react';
import { connect } from 'react-redux';
import { update } from '../../utils/actions';
import './ButtonCopyField.css';
import PropTypes from 'prop-types';

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

ButtonCopyField.propTypes = {
  store: PropTypes.string,
  update: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCopyField);
