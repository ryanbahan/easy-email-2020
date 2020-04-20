import React from 'react';
import { ChromePicker } from 'react-color';
import { connect } from 'react-redux';
import { update } from '../../actions';
import PropTypes from 'prop-types';

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
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }

    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }

    const button = {
      position: "relative"
    }

    return (
      <div>
        <button onClick={ this.handleClick } style={ button }>Pick Color</button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <ChromePicker
            onChange={ this.handleChange }
            color={ this.state.background }
          />
        </div> : null }
      </div>
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
