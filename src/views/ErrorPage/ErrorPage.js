import React from 'react';
import { connect } from 'react-redux';
import { clearError } from '../../utils/actions';
import './ErrorPage.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ErrorPage extends React.Component {

  componentWillUnmount() {
    this.props.clearError();
  }

  render() {
      return (
      <section className="error-wrapper">
        <div className="error-block">
          <p>{this.props.error}</p>
          <Link to="/">
            <button>Back to dashboard ></button>
          </Link>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error,
})

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearError()),
})

ErrorPage.propTypes = {
  error: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.bool
]),
  clearError: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
