import React from 'react';

const Book = ({ id, title, thumbnail, authors }) => {
  return (
    <li key={id}>
      <p>{title}</p>
      <p>{authors}</p>
      <img src={thumbnail} alt={`${title}pic`} />
    </li>
  );
};

export default Book;