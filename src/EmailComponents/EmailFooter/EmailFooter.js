import React from 'react';
import { MyContext } from '../../Context';
import './EmailFooter.css';

export default function EmailFooter(props) {
  return (
    <MyContext.Consumer>
      {(context) => (
        <footer>{context.footer}</footer>
      )}
    </MyContext.Consumer>
  )
}
