import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function EmailImageTagline(
  {
    mainImageTaglineBG,
    mainImageTagline,
    mainImageButtonCopy,
    mainImageButtonColor,
    mainImageFontColor,
    mainImageButtonFontColor,
    active
  }) {

  const buttonStyle = {
    backgroundColor: mainImageButtonColor,
    border: "solid 0.5px rgba(0,0,0,0.25)",
    padding: "0.5rem 1rem",
    fontSize: "0.85rem",
    borderRadius: "0.25rem",
    cursor: "pointer",
    height: "min-content",
    fontWeight: "600",
    color: mainImageButtonFontColor,
  };

  const sectionStyle = {
    margin: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: " 0.5rem 1rem",
    fontSize: "1.15rem",
    fontWeight: "500",
    backgroundColor: mainImageTaglineBG,
    color: mainImageFontColor,
  };

  return active ? (
    <section className="email-image-tagline" style={sectionStyle}>
      <p>{mainImageTagline}</p>
      <button style={buttonStyle}>{mainImageButtonCopy}</button>
    </section>
  ) : null
}

const mapStateToProps = state => ({
  mainImageTaglineBG: state.form.mainImageTaglineBG,
  mainImageTagline: state.form.mainImageTagline,
  mainImageButtonCopy: state.form.mainImageButtonCopy,
  mainImageButtonColor: state.form.mainImageButtonColor,
  mainImageFontColor: state.form.mainImageFontColor,
  mainImageButtonFontColor: state.form.mainImageButtonFontColor,
  active: state.visibility["Image Tagline"],
});

EmailImageTagline.propTypes = {
  mainImageTaglineBG: PropTypes.string,
  mainImageTagline: PropTypes.string,
  mainImageButtonCopy: PropTypes.string,
  mainImageButtonColor: PropTypes.string,
  mainImageFontColor: PropTypes.string,
  mainImageButtonFontColor: PropTypes.string,
  active: PropTypes.bool,
}

export default connect(mapStateToProps)(EmailImageTagline);
