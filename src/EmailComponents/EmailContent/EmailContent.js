import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';

const EmailContent = ({ content, active }) => {

  return active ? (
    <section className="email-content" style={{width: "600px"}}>
      {Parser(content)}
    </section>
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
