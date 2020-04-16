import React from 'react';
import { connect } from 'react-redux';

class Analyzer extends React.Component {
  constructor() {
    super();
    this.state = {
      overall: ""
    }
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = async () => {
    const data = {toneInput: {text: this.props.content}}

    const res = await fetch("http://localhost:3000/api/tone", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    const toneResponse = await res.json();
    this.setState({overall: toneResponse.document_tone.tones})
    console.log(toneResponse);
  }

  render() {
    return (
      <div className="tone-analysis-view">
      </div>
    )
  }
}

const mapStateToProps = state => ({
  content: state.form.content,
  tagline: state.form.mainImageTagline,
  cta: state.form.cta,
});

export default connect(mapStateToProps)(Analyzer);
