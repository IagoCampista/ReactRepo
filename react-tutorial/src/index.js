import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const firstBook = {
   img: "https://images-na.ssl-images-amazon.com/images/I/61+nBGbGW7L._AC_UL604_SR604,400_.jpg",
   title: "Verity",
   author: "Colleen Hoover",
};
const secondBook = {
   img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL604_SR604,400_.jpg",
   title: "Atomic Habits",
   author: "James Clear",
};

function BookList() {
   return (
      <section className="booklist">
         <Book
            img={firstBook.img}
            title={firstBook.title}
            author={firstBook.author}
         />
         <Book
            img={secondBook.img}
            title={secondBook.title}
            author={secondBook.author}
         />
      </section>
   );
}

const Book = (props) => {
   const { img, title, author } = props;
   return (
      <article className="book">
         <img src={img} alt="Book Cover" />
         <h1>{title}</h1>
         <h4>{author}</h4>
      </article>
   );
};
ReactDOM.render(<BookList />, document.getElementById("root"));
