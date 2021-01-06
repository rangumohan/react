import React, { Component } from "react";

export class ComponentLifeCycleHooks extends Component {
  constructor(props) {
    console.log("=== Constructor Called ====");
    super(props);

    this.state = {
      name: "welcome"
    };
    this.shouldUpdate = this.shouldUpdate.bind(this);
  }
  shouldUpdate() {
    this.setState({
      name: "Good Morning"
    });
  }
  componentWillMount() {
    console.log(" component WillMount Called ");
    console.log("===========================");
  }
  componentDidMount() {
    console.log(" component DidMount Called  ");
    console.log("===========================");
  }
  shouldComponentUpdate(nextProps, pq) {
    console.log("Should Compmonent Update  =", nextProps,pq);
    return true;
  }
  componentWillReceiveProps(nextProps) {
    console.log("compnent Will Receive props", nextProps);
  }
  componentDidUpdate() {
    console.log(" component Did update ");
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("component will Upate " + nextProps, nextState);
  }
  componentWillUnmount() {
    console.log("component Will Unmount called");
  }
  render() {
    console.log("Render method is called");
    console.log("===========================");
    return (
      <div>
        <h2>Hello i am from component Life Cycle Hooks</h2>
        <p>{this.props.name}</p>
        <button
          type="button"
          className="btn btn-info"
          onClick={this.shouldUpdate}
        >
          should
        </button>
      </div>
    );
  }
}

export default ComponentLifeCycleHooks;
