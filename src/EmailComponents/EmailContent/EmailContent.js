import React from 'react';
import { connect } from 'react-redux';

function EmailContent({ content }) {

  return (
    <section className="email-content" style={{padding: "0 1rem"}}>
      <p>{content}</p>
    </section>
  )
}

const mapStateToProps = state => ({
  content: state.form.content,
  buttonColor: state.form.ctaButtonColor,
  buttonFontColor: state.form.ctaButtonFontColor,
})

export default connect(mapStateToProps)(EmailContent);
