import React from 'react';
import { connect } from 'react-redux';

function EmailImage(
  {
    mainImage,
    mainImageTagline,
    mainImageButtonCopy,
    mainImageButtonColor,
    mainImageButtonFontColor
  }) {
  return (
    <section style={{display: "flex"}}>
      <img src={mainImage} style={{width: "100%", margin: "0", height: "100%"}}/>
    </section>
  )
}

const mapStateToProps = state => ({
  mainImage: state.form.mainImage,
  mainImageTagline: state.form.mainImageTagline,
  mainImageButtonCopy: state.form.mainImageButtonCopy,
  mainImageButtonColor: state.form.mainImageButtonColor,
  mainImageButtonFontColor: state.form.mainImageButtonFontColor,
});

export default connect(mapStateToProps)(EmailImage);
