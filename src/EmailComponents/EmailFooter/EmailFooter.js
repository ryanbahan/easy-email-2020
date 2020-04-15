import React from 'react';
import { connect } from 'react-redux';

function EmailFooter({ name, address, fontColor, bgColor }) {

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
          <p>{name}</p>
          <p>{address}</p>
        </footer>
  )
}

const mapStateToProps = state => ({
  address: state.form.footerAddress,
  name: state.form.footerName,
  bgColor: state.form.footerBGColor,
  fontColor: state.form.footerFontColor,
});

export default connect(mapStateToProps)(EmailFooter);
