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
    <table border="0" cellSpacing="0" cellPadding="0" width="600px">
      <tbody>
        <tr>
          <td><img src={mainImage} alt="Main content" style={{width: "600px"}} /></td>
        </tr>
      </tbody>
    </table>
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
