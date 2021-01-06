import React, { Component } from "react";

export class BookTitle extends Component {
  render() {
    return (
      <div>
        <label>
          Title:
          <input onChange={props.onTitleChange} value={props.title} />
        </label>
      </div>
    );
  }
}

export default BookTitle;
