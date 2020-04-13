import React from 'react';
import { MyContext } from '../../Context';
import './EmailFooter.css';

export default function EmailFooter(props) {
  return (
    <MyContext.Consumer>
      {(context) => (
        <footer>{context.state.footer}</footer>
      )}
    </MyContext.Consumer>
  )
}
