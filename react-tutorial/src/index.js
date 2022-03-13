import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const img =
   "https://images-na.ssl-images-amazon.com/images/I/61+nBGbGW7L._AC_UL604_SR604,400_.jpg";
const title = "Verity";
const author = "Colleen Hoover";

function BookList() {
   return (
      <section className="booklist">
         <Book />
         <Book />
         <Book />
         <Book />
         <Book />
      </section>
   );
}

const Book = () => {
   return (
      <article className="book">
         <img src={img} alt="Book Cover" />
         <h1>{title}</h1>
         <h4>{author}</h4>
      </article>
   );
};
ReactDOM.render(<BookList />, document.getElementById("root"));
