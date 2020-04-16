import React from 'react';
import { connect } from 'react-redux';

function EmailContent({ cta, buttonColor, buttonFontColor }) {
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
      <div className="email-cta" style={{display: "flex", justifyContent: "center"}}>
        <button style={buttonStyle}>{cta}</button>
      </div>
  )
}

const mapStateToProps = state => ({
  cta: state.form.cta,
  buttonColor: state.form.ctaButtonColor,
  buttonFontColor: state.form.ctaButtonFontColor,
})

export default connect(mapStateToProps)(EmailContent);
