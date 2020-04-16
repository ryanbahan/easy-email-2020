import React from 'react';
import { connect } from 'react-redux';
import { parseTones } from '../../utils';
import Chart from 'chart.js';

class Analyzer extends React.Component {
  constructor() {
    super();
    this.chartRef = React.createRef();
    this.state = {
      documentTones: "",
    }
  }

  componentDidMount() {
    this.requestTones();
    const myChartRef = this.chartRef.current.getContext("2d");

    var myChart = new Chart(myChartRef, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
            borderWidth: 1
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
        <canvas
          id="tone-chart"
          ref={this.chartRef}
          style={{width: "50rem", height: "30rem", border: "solid 1px black"}}
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
