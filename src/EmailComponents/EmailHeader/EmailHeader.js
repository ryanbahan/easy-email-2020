import React from 'react';
import './EmailHeader.css';
import { MyContext } from '../../Context';

export default function EmailHeader(props) {
  return (
      <header>
        <img src="https://via.placeholder.com/150" />
        <MyContext.Consumer>
          {(context) => (<p>{context.companyName}</p>)}
        </MyContext.Consumer>
      </header>
  )
}
