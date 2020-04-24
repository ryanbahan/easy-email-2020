import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';

const EmailContent = ({ content, active }) => {

  return active ? (
    <table border="0" cellSpacing="0" cellPadding="0" width="600px">
      <tbody>
        <tr>
            <td style={{padding: "0 16px"}}>{Parser(content)}</td>
        </tr>
      </tbody>
    </table>
  ) : null
}

const mapStateToProps = state => ({
  content: state.form.content,
  active: state.visibility["Main Content"]
})

EmailContent.propTypes = {
  content: PropTypes.string,
  active: PropTypes.bool,
};

export default connect(mapStateToProps)(EmailContent);
