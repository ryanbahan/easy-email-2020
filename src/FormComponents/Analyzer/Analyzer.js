import React from 'react';
import { connect } from 'react-redux';
import { parseTones } from '../../utils';

class Analyzer extends React.Component {
  constructor() {
    super();
    this.state = {
      documentTones: ""
    }
  }

  componentDidMount() {
    this.requestTones();
  }

  requestTones = async () => {
    const data = {toneInput: {text: this.props.content}}

    const res = await fetch("http://localhost:3000/api/tone", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    const toneResponse = await res.json();
    const tones = parseTones(toneResponse);
    this.setState({documentTones: tones});
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
