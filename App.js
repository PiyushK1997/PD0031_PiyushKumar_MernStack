import React from "react";
import Axios from "axios";
import Chart from 'react-apexcharts';
class App extends React.Component {

  
    constructor(props) {
    super(props);
    

    this.state = {
      list: [], 
      series: [
        {
          name: 'Sample 0',
          data: [
            {
              x: 'Cycle Status',
              y: [
                new Date(1701, 4, 7).getTime(),
                new Date(1809, 3, 4).getTime(),
              ]
            }
          ]
        },
        {
          name: 'Sample 1',
          data: [
            {
              x: 'Cycle Status',
              y: [
                new Date(1712, 4, 2).getTime(),
                new Date(1734, 4, 1).getTime(),
              ]
            }
          ]
        },
        {
          name: 'Sample null',
          data: [
            {
              x: 'Cycle Status',
              y: [
                new Date(1766, 4, 2).getTime(),
                new Date(1779, 2, 3).getTime()
              ]
            }
          ]
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'rangeBar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '50%',
            rangeBarGroupRows: true
          }
        },
        colors: [
          "#FFFF00", "#008000", "#ff8c00"
        ],
        fill: {
          type: 'solid'
        },
        xaxis: {
          type: 'datetime'
        },
        legend: {
          position: 'right'
        }
      }
    };
  }

  componentDidMount() {
    // Make API call to fetch data
    Axios.get("http://localhost:8768/api/SampleData")
      .then((res) => {
        this.setState({ list: res.data }, () => {
          console.log(this.state.list); 
       });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <div>
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="rangeBar" height={200} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default App;
