import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import parse, { domToReact } from 'html-react-parser';

const EmailImageTagline = (
  {
    mainImageTaglineBG,
    mainImageTagline,
    mainImageButtonCopy,
    mainImageButtonColor,
    mainImageFontColor,
    mainImageButtonFontColor,
    active,
    bannerTextActive,
    buttonTextActive,
  }) => {

  const buttonStyle = {
    backgroundColor: mainImageButtonColor,
    border: "solid 0.5px rgba(0,0,0,0.25)",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    cursor: "pointer",
    height: "min-content",
    fontWeight: "600",
    color: mainImageButtonFontColor,
    verticalAlign: "middle",
    float: "right",
    fontSize: "20px",
  };

  return active ? (
    <table border="0" cellSpacing="0" cellPadding="0" height="85px" width="600px" style={{color: mainImageFontColor, backgroundColor: mainImageTaglineBG}}>
      <tbody>
        <tr>
          {bannerTextActive && <td width="500px">
            {parse(mainImageTagline, {
              replace: domNode => {
                if (domNode.name) {
                  return React.createElement(domNode.name, {style: {paddingLeft: "1rem", fontSize: "26px"}}, domToReact(domNode.children, domNode.options))
                }
              }
            })}
          </td>}
          {buttonTextActive && <td style={{padding: " 0 1rem"}}><button style={buttonStyle}>{mainImageButtonCopy}</button></td>}
        </tr>
      </tbody>
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
  active: state.visibility["Image Banner"],
  bannerTextActive: state.visibility["Banner Text"],
  buttonTextActive: state.visibility["Button Text"],
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
