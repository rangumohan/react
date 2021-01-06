import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import ComponentLifeCycleHooks from "./ComponentLifeCycleHooks";
class MatirialDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: false,
      flag1: false
    };
    this.display = this.display.bind(this);
    this.displayUnMount = this.displayUnMount.bind(this);
    this.changed = this.changed.bind(this);
    this.willReceiveProps=this.willReceiveProps.bind(this);
  }
  display = () => {
    debugger;
    this.setState({
      flag: true
    });
  };
  displayUnMount = () => {
    debugger;
    this.setState({
      flag: false
    });
  };
  changed = () => {
    debugger;
    this.setState({
      flag: false,
      flag1: true,
      name: "fistName"
    });
  };
  willReceiveProps= () => {
    debugger;
    this.setState({
     name:'secondName'
    });
  };
  render() {
    return (
      <div>
        <h1>Matirial component</h1>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <button type="text" className="btn btn-primary" onClick={this.display}>
          Life Cycle Hooks
        </button>
        <button
          type="text"
          className="btn btn-primary"
          onClick={this.displayUnMount}
        >
          Life Cycle Hooks UnMount
        </button>
        <button type="text" className="btn btn-primary" onClick={this.changed}>
          Changed
        </button>
        <button type="text" className="btn btn-primary" onClick={this.willReceiveProps}>
          WillReceiveProps
        </button>

        <div>
          {this.state.flag ? (
            <ComponentLifeCycleHooks name={this.state.name} />
          ) : null}
        </div>
        <div>
          {this.state.flag1 ? <ComponentLifeCycleHooks name="raj" /> : null}
        </div>
      </div>
    );
  }
}
export default MatirialDemo;
