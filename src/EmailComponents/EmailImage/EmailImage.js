import React from 'react';
import './EmailImage.css';
import { MyContext } from '../../Context';

export default function EmailImage(props) {
  return (
    <section className="email-image">
      <MyContext.Consumer>
        {(context) => (
          <>
            <img src={context.state.mainImage} />
            <div className="email-image-bottom-bar">
              <p>{context.state.mainImageTagline}</p>
              <button>{context.state.mainImageButtonCopy}</button>
            </div>
          </>
        )}
      </MyContext.Consumer>
    </section>
  )
}
