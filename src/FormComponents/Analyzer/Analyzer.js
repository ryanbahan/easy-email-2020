import React from 'react';
import { connect } from 'react-redux';

function Analyzer({ content, tagline, cta }) {

  const getItems = async () => {
    const data = {toneInput: {text: content}}

    fetch("http://localhost:3000/api/tone", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    }).then(res => res.json()).then(data => console.log(data))
  }

  return <button onClick={() => getItems()}>Analyze Message</button>
}

const mapStateToProps = state => ({
  content: state.form.content,
  tagline: state.form.mainImageTagline,
  cta: state.form.cta,
});

export default connect(mapStateToProps)(Analyzer);
