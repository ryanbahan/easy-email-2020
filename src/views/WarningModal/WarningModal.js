import React from 'react';
import { connect } from 'react-redux';
import { clearWarning } from '../../utils/actions';
import PropTypes from 'prop-types';
import './WarningModal.css';

class ErrorPage extends React.Component {

  componentWillUnmount() {
    this.props.clearWarning();
  }

  closeModal = (e) => {
    this.props.clearWarning();
  }

  render() {
      return (
          <div className="warning-block">
            <p>{this.props.warning}</p>
          </div>
    )
  }
}

const mapStateToProps = state => ({
  warning: state.warning,
})

const mapDispatchToProps = dispatch => ({
  clearWarning: () => dispatch(clearWarning()),
})

ErrorPage.propTypes = {
  error: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.bool
]),
  clearWarning: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
