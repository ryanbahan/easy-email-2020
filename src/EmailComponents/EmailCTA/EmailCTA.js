import React from 'react';
import { MyContext } from '../../Context';
import './EmailCTA.css';

export default function EmailCTA(props) {
  return (
    <div className="email-cta">
      <MyContext.Consumer>
        {(context) => (
          <button>{context.state.cta}</button>
        )}
      </MyContext.Consumer>
    </div>
  )
}
