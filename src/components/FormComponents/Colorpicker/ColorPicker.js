import React from 'react';
import { connect } from 'react-redux';
import { update } from '../../../utils/actions';
import PropTypes from 'prop-types';
import CustomPicker from './CustomPicker';

class ColorPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      displayColorPicker: false,
      background: '#fff'
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleChange = (color) => {
    this.setState({ background: color.hex });
    this.props.update({[this.props.store]: color.hex});
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  render() {

    return (
      <>
        <button onClick={ this.handleClick } style={{cursor: "pointer"}}>Pick Color</button>
        { this.state.displayColorPicker ? <div style={{flexBasis: "100%", display: "flex", justifyContent: "flex-end", marginBottom: "1rem"}}>
          <CustomPicker
            onChange={ this.handleChange }
            color={ this.state.background }
          />
        </div> : null }
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  update: content => dispatch(update(content))
})

ColorPicker.propTypes = {
  store: PropTypes.string,
  update: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(ColorPicker);
