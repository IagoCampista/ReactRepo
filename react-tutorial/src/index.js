import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const books = [
   {
      id: 1,
      img: "https://images-na.ssl-images-amazon.com/images/I/61+nBGbGW7L._AC_UL604_SR604,400_.jpg",
      title: "Verity",
      author: "Colleen Hoover",
   },
   {
      id: 2,
      img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL604_SR604,400_.jpg",
      title: "Atomic Habits",
      author: "James Clear",
   },
   {
      id: 3,
      img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
      title: "I Love You to the Moon and Back",
      author: "Amelia Hepworth",
   },
];

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
   return (
      <article className="book">
         <img src={img} alt="Book Cover" />
         <h1>{title}</h1>
         <h4>{author}</h4>
      </article>
   );
};
ReactDOM.render(<BookList />, document.getElementById("root"));
