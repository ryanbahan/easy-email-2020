import React from 'react';
import './EmailContent.css';
import { MyContext } from '../../Context';

export default function EmailContent(props) {
  return (
    <section className="email-content">
      <MyContext.Consumer>
        {(context) => (
          <p>{context.state.content}</p>
        )}
      </MyContext.Consumer>
    </section>
)
}
