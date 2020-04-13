import React from 'react';
import './EmailHeader.css';
import { MyContext } from '../../Context';

export default function EmailHeader(props) {
  return (
      <header>
        <MyContext.Consumer>
          {(context) => (
            <>
              <img src={context.companyImage} />
              <p>{context.companyName}</p>
            </>
          )}
        </MyContext.Consumer>
      </header>
  )
}
