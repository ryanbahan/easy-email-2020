import React from 'react';
import { connect } from 'react-redux';
import { requestTones, createChart } from '../../utils';
import './Analyzer.css';
import EmailImageTagline from '../../EmailComponents/EmailImageTagline/EmailImageTagline';
import EmailContent from '../../EmailComponents/EmailContent/EmailContent';
import EmailCTA from '../../EmailComponents/EmailCTA/EmailCTA';

class Analyzer extends React.Component {
  constructor() {
    super();
    this.contentRef = React.createRef();
    this.ctaRef = React.createRef();
    this.taglineRef = React.createRef();
  }

  async componentDidMount() {
    // const contentTones = await requestTones(this.props.content);
    // const taglineTones = await requestTones(this.props.tagline);
    // const taglineButtonTones = await requestTones(this.props.tagLineButton);
    // const taglineAndButtonTones = taglineTones.concat(taglineButtonTones);
    // const ctaTones = await requestTones(this.props.cta);
    //
    // const contentRef = this.contentRef.current.getContext("2d");
    // const taglineRef = this.taglineRef.current.getContext("2d");
    // const ctaRef = this.ctaRef.current.getContext("2d");
    //
    // createChart(contentRef, contentTones, "doughnut");
    // createChart(taglineRef, taglineAndButtonTones);
    // createChart(ctaRef, ctaTones);
  }

  render() {
    return (
      <div className="tone-analysis-view">
        <h2>Content Sentiment</h2>
        <div className="email-content-wrapper">
          <EmailContent />
        </div>
        <canvas
          ref={this.contentRef}
          style={{maxWidth: "50rem", maxHeight: "30rem"}}
        >
        </canvas>
        <h2>Tagline Sentiment</h2>
        <div className="email-tagline-wrapper">
          <EmailImageTagline />
        </div>
        <canvas
          ref={this.taglineRef}
          style={{maxWidth: "50rem", maxHeight: "30rem"}}
        >
        </canvas>
        <h2>Call-to-action Sentiment</h2>
        <div className="email-tagline-wrapper">
          <EmailCTA />
        </div>
        <canvas
          ref={this.ctaRef}
          style={{maxWidth: "50rem", maxHeight: "30rem"}}
        >
        </canvas>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  content: state.form.content,
  tagline: state.form.mainImageTagline,
  tagLineButton: state.form.mainImageButtonCopy,
  cta: state.form.cta,
});

export default connect(mapStateToProps)(Analyzer);
