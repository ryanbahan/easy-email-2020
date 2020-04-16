import React from 'react';
import { connect } from 'react-redux';

function EmailFooter({ address, fontColor, bgColor, active }) {

  const footerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "1rem",
    color: fontColor,
    backgroundColor: bgColor,
    fontWeight: "500",
  }

  return active ? (
        <footer style={footerStyle}>
          <p style={{fontSize: "0.75rem"}}>{address}</p>
        </footer>
  ) : null
}

const mapStateToProps = state => ({
  address: state.form.footerAddress,
  bgColor: state.form.footerBGColor,
  fontColor: state.form.footerFontColor,
  active: state.visibility["Footer"],
});

export default connect(mapStateToProps)(EmailFooter);
