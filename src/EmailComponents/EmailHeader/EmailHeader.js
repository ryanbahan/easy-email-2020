import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EmailHeader = ({
  bgColor,
  companyImage,
  companyName,
  companyFontColor,
  active }) => {
  return active ? (
    <table border="0" cellSpacing="0" cellPadding="0" width="600px" height="85px" style={{color: companyFontColor, backgroundColor: bgColor}}>
        <tr>
            <td width="65px"><img src={companyImage} alt="Company logo" border="0" style={{display: "block", width: "55px", margin: "0"}} /></td>
            <td style={{fontSize: "16px"}}>{companyName}</td>
        </tr>
    </table>

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
