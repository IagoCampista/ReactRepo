import React from "react";

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
export default Book;
