import React from "react";
import ReactDOM from "react-dom";

function BookList() {
   return (
      <section>
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
      <article>
         <Image />
         <Title />
         <Author />
      </article>
   );
};

const Image = () => {
   return (
      <img
         src="https://images-na.ssl-images-amazon.com/images/I/61+nBGbGW7L._AC_UL604_SR604,400_.jpg"
         alt="Book Cover"
      />
   );
};

const Title = () => <h1>Verity</h1>;

const Author = () => <h4>Colleen Hoover</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));
