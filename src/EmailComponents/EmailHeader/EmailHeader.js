import React from 'react';
import './EmailHeader.css';
import { connect } from 'react-redux';

function EmailHeader({ bgColor, companyImage, companyName, companyFontColor }) {

  return (
      <header style={{backgroundColor: bgColor}}>
        <img src={companyImage} />
        <p style={{color: companyFontColor}}>{companyName}</p>
      </header>
  )
}

const mapStateToProps = state => ({
  companyImage: state.form.companyImage,
  companyName: state.form.companyName,
  companyFontColor: state.form.companyFontColor,
  bgColor: state.form.headerBGColor,
})

export default connect(mapStateToProps)(EmailHeader);
