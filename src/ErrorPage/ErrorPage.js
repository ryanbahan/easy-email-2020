import React from 'react';
import { connect } from 'react-redux';
import { clearError } from '../actions';

class ErrorPage extends React.Component {

  componentDidMount() {
    this.props.clearError();
  }

  render() {
      return (
      <div>
        Error
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearError()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
