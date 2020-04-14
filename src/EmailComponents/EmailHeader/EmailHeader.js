import React from 'react';
import './EmailHeader.css';
import { connect } from 'react-redux';

function EmailHeader({ bgColor, borderColor, companyImage, companyName }) {

  return (
      <header style={{backgroundColor: bgColor, border: `solid 0.5px ${borderColor}`}}>
        <img src={companyImage} />
        <p>{companyName}</p>
      </header>
  )
}

const mapStateToProps = state => ({
  companyImage: state.form.companyImage,
  companyName: state.form.companyName,
  bgColor: state.form.bgColor,
  borderColor: state.form.borderColor,
})

export default connect(mapStateToProps)(EmailHeader);
