import React from 'react';
import { connect } from 'react-redux';
import './EmailCTA.css';

function EmailCTA({ cta, buttonColor, buttonFontColor }) {
  return (
    <div className="email-cta">
          <button style={{color: buttonFontColor, backgroundColor: buttonColor}}>{cta}</button>
    </div>
  )
}

const mapStateToProps = state => ({
  cta: state.form.cta,
  buttonColor: state.form.ctaButtonColor,
  buttonFontColor: state.form.ctaButtonFontColor,
});

export default connect(mapStateToProps)(EmailCTA);
