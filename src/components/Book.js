import React, { Component } from "react";

export class Book extends Component {
  render() {
    return (
      <div>
        <li>
          <h2>{this.props.title}</h2>
          <div>{this.props.author}</div>
        </li>
      </div>
    );
  }
}

export default Book;
