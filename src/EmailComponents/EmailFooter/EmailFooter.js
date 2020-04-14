import React from 'react';
import { MyContext } from '../../Context';
import './EmailFooter.css';

export default function EmailFooter(props) {
  return (
    <MyContext.Consumer>
      {(context) => (
        <footer>
          <p>{context.state.footerName}</p>
          <p>{context.state.footerAddress}</p>
        </footer>
      )}
    </MyContext.Consumer>
  )
}
