import React from 'react';
import { connect } from 'react-redux';

function EmailFooter({ address, fontColor, bgColor }) {

  const footerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "1rem",
    color: fontColor,
    backgroundColor: bgColor,
    fontWeight: "500",
  }

  return (
        <footer style={footerStyle}>
          <p style={{fontSize: "0.75rem"}}>{address}</p>
        </footer>
  )
}

const mapStateToProps = state => ({
  address: state.form.footerAddress,
  bgColor: state.form.footerBGColor,
  fontColor: state.form.footerFontColor,
});

export default connect(mapStateToProps)(EmailFooter);
