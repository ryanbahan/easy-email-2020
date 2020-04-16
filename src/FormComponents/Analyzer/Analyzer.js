import React from 'react';
import { connect } from 'react-redux';

class Analyzer extends React.Component {

  componentDidMount() {
    this.getItems();
  }

  getItems = async () => {
    const data = {toneInput: {text: this.props.content}}

    fetch("http://localhost:3000/api/tone", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    }).then(res => res.json()).then(data => console.log(data))
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
