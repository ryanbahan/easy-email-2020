import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EmailImage = (
  {
    mainImage,
    mainImageTagline,
    mainImageButtonCopy,
    mainImageButtonColor,
    mainImageButtonFontColor,
    active,
  }) => {

  return active ? (
    <section style={{display: "flex"}}>
      <img src={mainImage} alt="Main content" style={{width: "100%", margin: "0", height: "100%"}}/>
    </section>
  ) : null
}

const mapStateToProps = state => ({
  mainImage: state.form.mainImage,
  mainImageTagline: state.form.mainImageTagline,
  mainImageButtonCopy: state.form.mainImageButtonCopy,
  mainImageButtonColor: state.form.mainImageButtonColor,
  mainImageButtonFontColor: state.form.mainImageButtonFontColor,
  active: state.visibility["Main Image"],
});

EmailImage.propTypes = {
  mainImage: PropTypes.string,
  mainImageTagline: PropTypes.string,
  mainImageButtonCopy: PropTypes.string,
  mainImageButtonColor: PropTypes.string,
  mainImageButtonFontColor: PropTypes.string,
  active: PropTypes.bool,
}

export default connect(mapStateToProps)(EmailImage);
