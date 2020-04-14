import React from 'react';
import './EmailContent.css';
import { connect } from 'react-redux';

function EmailContent({ content }) {
  return (
    <section className="email-content">
          <p>{content}</p>
    </section>
  )
}

const mapStateToProps = state => ({
  content: state.form.content
})

export default connect(mapStateToProps)(EmailContent);
