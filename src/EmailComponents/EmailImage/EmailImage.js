import React from 'react';
import './EmailImage.css';
import { MyContext } from '../../Context';

export default function EmailImage(props) {
  return (
    <section className="email-image">
      <MyContext.Consumer>
        {(context) => (
          <>
            <img src={context.mainImage} />
            <div class="email-image-bottom-bar">
              <p>{context.mainImageTagline}</p>
              <button>{context.mainImageButtonCopy}</button>
            </div>
          </>
        )}
      </MyContext.Consumer>
    </section>
  )
}
