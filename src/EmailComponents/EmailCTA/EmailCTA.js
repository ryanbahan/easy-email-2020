import React from 'react';
import { connect } from 'react-redux';
import './EmailCTA.css';

function EmailCTA({ cta }) {
  return (
    <div className="email-cta">
          <button>{cta}</button>
    </div>
  )
}

const mapStateToProps = state => ({
  cta: state.form.cta
});

export default connect(mapStateToProps)(EmailCTA);
