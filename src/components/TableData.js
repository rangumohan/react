import React from "react";
import { getData, deleteData, updateData } from "./service";
import Graph from "./Gaphs";
class TableData extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
      isEdit: false,
      flag: false,
      data: {
        id: "",
        fname: "",
        lname: "",
        contact: "",
        email: "",
        pdate: ""
      },
      editId: 0
    };
    // this.componentDidMount = this.componentDidMount(this);
    this.edit = this.edit.bind(this);
    this.update = this.update.bind(this);
    this.changeText = this.changeText.bind(this);
    this.getData = this.getData.bind(this);

    // this.delete=this.delete.bind(this);
  }

  componentDidMount() {
    debugger;
    this.getData();
    // this.state.tableData = getData();
    // this.setState({ ...this.state });
    // console.log(this.state.tableData);
  }
  getData() {
    debugger;
    this.setState({
      tableData: getData()
    });
  }
  //   edit(item) {
  //     debugger;
  //     console.log("edit called" +item);
  //   }
  //   edit(item) {
  //     debugger;
  //     console.log(JSON.stringify(item));
  //   }
  edit(datas, index) {
    debugger;
    this.setState({
      editId: datas.id,
      isEdit: true,
      flag: true,
      data: {
        id: datas.id,
        fname: datas.fname,
        lname: datas.lname,
        contact: datas.contact,
        email: datas.email
      },
      months:[]
    });
    console.log(this.state.editId + " MY id is ");
  }

  changeText(event) {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value },
      dataList:[]
    });
    // this.setState({
    //   data: {
    //     id: this.state.data.id,
    //     fname: this.state.data.fname,
    //     lname: this.state.data.lname,
    //     contact: this.state.data.contact,
    //     email: this.state.data.email
    //   }
    // });
  }
  delete(item) {
    debugger;
    deleteData(item.id);
    this.getData();
    // this.setState({
    //   tableData: this.state.tableData.filter(item => {
    //     return item.id !== data.id;
    //   })
    // });
  }
  update() {
    debugger;
    updateData(this.state.data);
    this.getData();
    debugger;
    this.setState({
      isEdit: false,
      flag: false
    });
  }
  render() {
    debugger;
    console.log("render executed");
    return (
      <div>
        <h5>This is TableData component</h5>
        <div className="container">
          <table className="table">
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Contact</th>
              <th>Email</th>
              <th>PDate</th>
              <th>Action</th>
            </tr>
            <tbody>
              {this.state.tableData.map((item, index) => (
                <tr key={index}>
                  {this.state.isEdit && item.id === this.state.editId ? (
                    <td>
                      <input
                        type="text"
                        name="fname"
                        className="form-control"
                        value={this.state.data.fname}
                        onChange={this.changeText}
                      />
                    </td>
                  ) : (
                    <td>{item.fname}</td>
                  )}
                  {this.state.isEdit && item.id === this.state.editId ? (
                    <td>
                      <input
                        type="text"
                        name="lname"
                        className="form-control"
                        value={this.state.data.lname}
                        onChange={this.changeText}
                      />
                    </td>
                  ) : (
                    <td>{item.lname}</td>
                  )}
                  {this.state.isEdit && item.id === this.state.editId ? (
                    <td>
                      <input
                        type="text"
                        name="contact"
                        className="form-control"
                        value={this.state.data.contact}
                        onChange={this.changeText}
                      />
                    </td>
                  ) : (
                    <td>{item.contact}</td>
                  )}
                  {this.state.isEdit && item.id === this.state.editId ? (
                    <td>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        value={this.state.data.email}
                        onChange={this.changeText}
                      />
                    </td>
                  ) : (
                    <td>{item.email}</td>
                  )}
                  <td>{item.pdate}</td>

                  <td className="d-flex">
                    {this.state.flag && item.id === this.state.editId ? (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.update}
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.edit(item, index)}
                      >
                        Edit
                      </button>
                    )}

                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.delete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       <Graph/>
      </div>
    );
  }
}
export default TableData;
