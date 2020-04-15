import React from 'react';
import { connect } from 'react-redux';
import './EmailFooter.css';

function EmailFooter({ name, address, fontColor, bgColor }) {
  return (
        <footer style={{color: fontColor, backgroundColor: bgColor}}>
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
