import React from 'react';
import { connect } from 'react-redux';

function EmailContent({ content, active }) {

  return active ? (
    <section className="email-content" style={{padding: "0 1rem"}}>
      <p>{content}</p>
    </section>
  ) : null
}

const mapStateToProps = state => ({
  content: state.form.content,
  active: state.visibility["Main Content"]
})

export default connect(mapStateToProps)(EmailContent);
