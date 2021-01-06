import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import TableData from "./components/TableData";
import MatirialDemo from "./components/MatiraialDemos";
import Parent from "./components/Parent";
import { BookList } from "./components/BookList";
import BookEditFrom from "./components/BookEditFrom";
import context3 from "./components/context3";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="row">
          <div className="col-sm-2">
            <ul>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
              <li>
                <Link to={"/table"}>Employee list</Link>
              </li>
              <li>
                <Link to={"/matirial"}>Using Matirial</Link>
              </li>
              <li>
                <Link to={"/parent"}>Parent</Link>
              </li>
              <li>
                <Link to={"/bookList"}>BookList</Link>
              </li>
              <li>
                <Link to={"/BookEditFrom"}>BookEditFrom</Link>
              </li>
              <li>
                <Link to={"/context3"}>context</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lh-10">
          <Route path="/register" component={Register}></Route>
          <Route path="/table" component={TableData}></Route>
          <Route path="/Matirial" component={MatirialDemo}></Route>
          <Route path="/parent" component={Parent}></Route>
          <Route path="/bookList" component={BookList}></Route>
          <Route path="/context3" component={context3}></Route>
          {/* <Route path="/BookEditFrom" component={BookEditFrom}></Route> */}
          <Route path="/BookEdit" component={BookEditFrom}></Route>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
