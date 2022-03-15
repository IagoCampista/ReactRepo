import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./books";

function BookList() {
   return (
      <section className="booklist">
         {books.map((book) => {
            return <Book key={book.id} {...book}></Book>;
         })}
      </section>
   );
}

const Book = ({ img, title, author }) => {
   const showAuthor = (author) => {
      alert(author);
   };
   return (
      <article className="book">
         <img src={img} alt="Book Cover" />
         <h1>{title}</h1>
         <h4>{author}</h4>
         <button onClick={() => showAuthor(author)}>Show Author</button>
      </article>
   );
};
ReactDOM.render(<BookList />, document.getElementById("root"));
