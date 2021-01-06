import React from "react";
import Book from "./Book";
export function BookList() {
  const list = [
    { title: "A Christmas Carol", author: "Charles Dickens" },
    { title: "The Mansion", author: "Henry Van Dyke" }
    // ...
  ];

  return (
    <ul>
      {list.map((book, i) => (
  
       <Book title={book.title} author={book.author} key={i} />
      
      ))}
    </ul>
  );
}
