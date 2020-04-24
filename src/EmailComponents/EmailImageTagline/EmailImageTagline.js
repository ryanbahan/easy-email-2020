import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import parse from 'html-react-parser';

const EmailImageTagline = (
  {
    mainImageTaglineBG,
    mainImageTagline,
    mainImageButtonCopy,
    mainImageButtonColor,
    mainImageFontColor,
    mainImageButtonFontColor,
    active
  }) => {

  const buttonStyle = {
    backgroundColor: mainImageButtonColor,
    display: "inline",
    border: "solid 0.5px rgba(0,0,0,0.25)",
    padding: "0.5rem 1rem",
    fontSize: "0.85rem",
    borderRadius: "0.25rem",
    cursor: "pointer",
    height: "min-content",
    fontWeight: "600",
    color: mainImageButtonFontColor,
    verticalAlign: "middle",
    float: "right",
  };

  const sectionStyle = {
    backgroundColor: mainImageTaglineBG,
    color: mainImageFontColor,
    width: "600px",
  };

  return active ? (
    <section className="email-image-tagline" style={sectionStyle}>
      {parse(mainImageTagline, {
        replace: domNode => {
          if (domNode.name === 'p') {
            return React.createElement("p", {style: {display: "inline", border: "solid 1px black", verticalAlign: "top"}}, domNode.children[0].data)
          }
        }
      })}
      <button style={buttonStyle}>{parse(mainImageButtonCopy)}</button>
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
