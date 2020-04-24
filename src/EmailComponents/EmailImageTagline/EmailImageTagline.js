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

  return active ? (
    <table border="0" cellSpacing="0" cellPadding="0" width="600px" height="85px" style={{color: mainImageFontColor, backgroundColor: mainImageTaglineBG}}>
      <tr>
        <td width="500px">
          {parse(mainImageTagline, {
            replace: domNode => {
              if (domNode.name === 'p') {
                  return React.createElement("div", {style: {paddingLeft: "1rem"}}, domNode.children[0].data)
                }
              }
            })}
          </td>
        <td style={{paddingRight: "1rem"}}><button style={buttonStyle}>{mainImageButtonCopy}</button></td>
      </tr>
    </table>
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
