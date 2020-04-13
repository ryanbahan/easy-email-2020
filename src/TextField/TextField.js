import React from 'react';
import './TextField.css';

export default class TextField extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    }
  }

  toggleModal = (e) => {
    console.log(this.state.active);
    this.setState({active: !this.state.active})
  }

  render() {
    return (
      <>
      <button className="text-field-btn" onClick={() => this.toggleModal()}>
        Edit
      </button>
      <div className={this.state.active ? "modal-wrapper" : "hidden"}>
        <div className="modal">
          <p className="close-modal" onClick={() => this.toggleModal()}>X</p>
          <p>Test</p>
        </div>
      </div>
      </>
    )
  }
}
