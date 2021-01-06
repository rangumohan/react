import React from "react";
import { postData } from "./service";
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        id: "1",
        fname: "sai",
        lname: "ram",
        contact: "9885454174",
        email: "sai@gmail.com",
        pdate: ""
      }
    };
    this.addData = this.addData.bind(this);
    this.save = this.save.bind(this);
  }
  addData(event) {
    debugger;
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value }
    
    });

    // let TotalData={...TotalData,}
    // this.state.data={...this.state.data,[event.target.name]:event.target.value}
    // console.log(event.target.value);
  }
  save = () => {
    const date = new Date();
     const month = date.getMonth() + 1;
    this.state.data.pdate =
      date.getDate() + "/" +month+ "/" + date.getFullYear();
    postData(this.state.data);
    this.props.history.push({
      pathname: "/table",
      state: { data: this.state.data }
    });

    // const day = date.getDate();
   
    // const year = date.getFullYear();
    // this.setState(
    //   {

    //   },
    //   console.log("after update", this.state.data.pdate)
    // );
    // this.setState({
    //   ...this.state
    // });
    //  console.log(this.state.data.pdate + "  present date is");
    // console.log(date.getDay);
  };
  render() {
    return (
      <div>
        <h3>Register</h3>
        <div className="center">
          <form>
            <div className="card col-sm-3 offset-5">
              <div className="card-content ">
                <label>Id</label>
                <input
                  type="text"
                  onChange={this.addData}
                  className="form-control"
                  name="id"
                  value={this.state.data.id}
                />
                <label>FirstName</label>
                <input
                  type="text"
                  onChange={this.addData}
                  className="form-control"
                  name="fname"
                  value={this.state.data.fname}
                />
                <label>LastName</label>
                <input
                  type="text"
                  onChange={this.addData}
                  className="form-control"
                  name="lname"
                  value={this.state.data.lname}
                />
                <label>Contact</label>
                <input
                  type="number"
                  onChange={this.addData}
                  className="form-control"
                  value={this.state.data.contact}
                  name="contact"
                />
                <label>Email</label>
                <input
                  type="email"
                  onChange={this.addData}
                  className="form-control"
                  name="email"
                  value={this.state.data.email}
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.save}
                >
                  save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;
