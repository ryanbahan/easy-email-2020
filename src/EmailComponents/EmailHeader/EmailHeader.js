import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';

const EmailHeader = ({
  bgColor,
  companyImage,
  companyName,
  companyFontColor,
  active }) => {

  return active ? (
      <header style={{backgroundColor: bgColor, display: "flex", alignItems: "center"}}>
        <img src={companyImage} alt="Company logo" style={{width: "2.5rem", margin: "1rem"}}/>
        {Parser(companyName)}
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

EmailHeader.propTypes = {
  bgColor: PropTypes.string,
  companyImage: PropTypes.string,
  companyName: PropTypes.string,
  companyFontColor: PropTypes.string,
  active: PropTypes.bool,
}

export default connect(mapStateToProps)(EmailHeader);
