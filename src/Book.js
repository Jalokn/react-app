import React from "react";

const Book = ({ img, title, author }) => {
  const clickEvent = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="book cover" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button onClick={() => clickEvent(author)}>More Complex</button>
    </article>
  );
};

export default Book;
