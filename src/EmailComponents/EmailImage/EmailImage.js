import React from 'react';
import './EmailImage.css';

export default function EmailImage(props) {
  return (
    <section className="email-image">
      <img src="https://via.placeholder.com/1200x600" />
      <div class="email-image-bottom-bar">
        <p>CTA tagline</p>
        <button>CTA</button>
      </div>
    </section>
  )
}
