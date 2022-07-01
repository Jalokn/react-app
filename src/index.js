import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L.jpg"
    alt="I love you to the moon and back: coverArt"
  />
);

const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "1rem", marginTop: ".25" }}>
    Amelia Hepworth
  </h4>
);

ReactDOM.render(<BookList />, document.getElementById("root"));
