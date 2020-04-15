import React from 'react';
import { connect } from 'react-redux';

function EmailContent({ content, cta, buttonColor, buttonFontColor }) {
  const buttonStyle = {
    margin: "1rem 0",
    padding: "0.75rem 1.25rem",
    border: "solid 0.5px rgba(0,0,0,0.25)",
    borderRadius: "0.25rem",
    color: buttonFontColor,
    backgroundColor: buttonColor,
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "1rem",
  }

  return (
    <section className="email-content" style={{padding: "0 1rem"}}>
      <p>{content}</p>
      <div className="email-cta" style={{display: "flex", justifyContent: "center"}}>
        <button style={buttonStyle}>{cta}</button>
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  content: state.form.content,
  cta: state.form.cta,
  buttonColor: state.form.ctaButtonColor,
  buttonFontColor: state.form.ctaButtonFontColor,
})

export default connect(mapStateToProps)(EmailContent);
