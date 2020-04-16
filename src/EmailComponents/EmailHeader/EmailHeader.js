import React from 'react';
import { connect } from 'react-redux';

function EmailHeader({ bgColor, companyImage, companyName, companyFontColor, active }) {

  return active ? (
      <header style={{backgroundColor: bgColor, display: "flex", alignItems: "center"}}>
        <img src={companyImage} style={{width: "2.5rem", margin: "1rem"}}/>
        <p style={{color: companyFontColor, fontWeight: "500", fontSize: "1.075rem"}}>{companyName}</p>
      </header>
  ) : null
}

const mapStateToProps = state => ({
  companyImage: state.form.companyImage,
  companyName: state.form.companyName,
  companyFontColor: state.form.companyFontColor,
  bgColor: state.form.headerBGColor,
  active: state.visibility["Header"],
})

export default connect(mapStateToProps)(EmailHeader);
