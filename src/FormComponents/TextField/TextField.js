import React from 'react';
import { MyContext } from '../../Context';
import './TextField.css';

export default class TextField extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      content: '',
    }
  }

  toggleModal = (e) => {
    this.setState({active: !this.state.active})
  }

  handleFormInput = (e) => {
    this.setState({content: e.target.value});
  }

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <>
          <button className="text-field-btn" onClick={() => this.toggleModal()}>
            Edit
          </button>
          <div className={this.state.active ? "modal-wrapper" : "hidden"}>
            <div className="modal">
              <p className="close-modal" onClick={() => this.toggleModal()}>X</p>
              <textarea type="text" onChange={this.handleFormInput}/>
              <button
                onClick={() => context
                  .update(this.props.store, this.state.content)}
              >
                Submit
              </button>
            </div>
          </div>
          </>
        )}
      </MyContext.Consumer>
    )
  }
}
