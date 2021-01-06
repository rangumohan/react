import React, { useRef } from "react";
import Child from "./Child";
import { instances } from "chart.js";
class Parent extends React.Component {
  //childRef = useRef();
  constructor() {
    super();
    //    this.child = React.createRef();

    this.state = {
      pdata: "this is parent Data"
    };
    this.handleEvent = this.handleEvent.bind(this);
    // this.refs./chisdkhld = React.createRef();
  }
  componentDidMount() {}
  handleEvent(evt) {
    debugger;
    alert(evt);
    this.setState({
      pdata: "I am chaged because of child click event"
    });
  }
  //   display = () => {
  //     this.child.current.callChild();

  //   };
  render() {
    return (
      <div>
        <h4 className="text-center">Welcome To Parent </h4>
        <p>{this.state.pdata}</p>
        <Child display={this.handleEvent} ref={cls => (this.chisdkhld = cls)} />
        <button
          onClick={() => {
            this.chisdkhld.callChild("good evening");
          }}
        >
          I am in parent
        </button>
        <p>
          -----------------------------Ref--------------------------------------
        </p>
        {/* <Child ref={instance=>{this.child=instance;}}/>
        <button  onClick={()=>{this.child.callChild()}}>
          Parent Button
        </button>  */}
      </div>
    );
  }
}
export default Parent;
