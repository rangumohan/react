import React, { Component } from "react";

export class Child extends Component {
  constructor(props) {
    super(props);
    this.myRef = null;
    this.state = {
      data: "child data"
    };
    this.callChild=this.callChild.bind(this);
  }
  //   getData() {
  //     alert("hello");
  //   }

  callChild(evt) {
      debugger
    alert(evt);
    this.setState({
        data: "chlid data was changed bcoz of parent class click Event"
      });
  }
  render() {
    // const props="";
    return (
      <div>
        <p ref="hello">{this.state.data}</p>
        <div ref={this.myRef}></div>
        {/* <h5>Child Component</h5> */}
        <button type="button" onClick={()=>this.props.display("child data")}>
          I Am In Child
        </button>
        {/* <p>{this.state.data}</p> */}
      </div>
    );
  }
}

export default Child;
