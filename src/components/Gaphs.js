import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { getData } from "./service";
class Graph extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: "",
          fname: "",
          lname: "",
          contact: "",
          email: "",
          pdate: ""
        }
      ],
       months: [],
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Auguest",
          "Septempber",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: ["Population"],
            data: [45612, 25892, 24851, 19237, 21425, 25236],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(75, 206, 86, 0.6)",
              "rgba(255, 192,192, 0.6)",
              "rgba(255, 123, 80, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    };
  }
  componentDidMount() {
    debugger;
    // this.state.data=getData();
    this.getData();
    // alert("Graph data" + JSON.stringify(this.state.data));
    console.log("dat isss" + JSON.stringify(this.state.data));
    this.setState({
      months: this.state.data.map(item => {
        // alert(" item is :" + JSON.stringify(item));
        // const mon=item.pdate('/')
        const mon = item.pdate;
        const temp = mon.split("/");
       // alert(temp[1]);
        // return temp[1];
        this.state.months.push(temp[1]);
        // this.state.months={...temp[1],temp};
        alert(JSON.stringify(this.state.months) + " helllo")
        console.log(JSON.stringify(this.state.months) + " helllo");
      })
    });
  }
  getData() {
    // this.setState({
    //   data: getData()
    // });
    this.state.data = getData();
  }

  render() {
    return (
      <div className="chart">
        <div className="col-md-6">
          <Bar
            data={this.state.chartData}
            width={100}
            height={50}
            options={{
              title: {
                display: true,
                text: "population in India",
                fontsize: 23
              },
              legend: {
                display: true,
                position: "left"
              }
            }}
          />
        </div>
      </div>
    );
  }
}
export default Graph;
