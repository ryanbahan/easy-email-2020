import React from 'react';
import { connect } from 'react-redux';
import { requestTones } from '../../utils';
import Chart from 'chart.js';
import './Analyzer.css';

class Analyzer extends React.Component {
  constructor() {
    super();
    this.chartRef = React.createRef();
    this.state = {
      documentTones: "",
    }
  }

  async componentDidMount() {
    const contentTones = await requestTones(this.props.content);
    const myChartRef = this.chartRef.current.getContext("2d");

    const myChart = new Chart(myChartRef, {
    type: 'bar',
    data: {
        labels: contentTones.map(tone => tone.tone_name),
        datasets: [{
            label: 'Sentiment Strength',
            data: contentTones.map(tone => (tone.score * 100).toFixed()),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
      }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
  }

  render() {
    return (
      <div className="tone-analysis-view">
        <h2>Content Sentiment</h2>
        <canvas
          id="tone-chart"
          ref={this.chartRef}
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
  cta: state.form.cta,
});

export default connect(mapStateToProps)(Analyzer);
