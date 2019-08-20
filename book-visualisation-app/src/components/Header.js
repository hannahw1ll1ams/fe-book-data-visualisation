import React from 'react';
import SearchBox from './SearchBox';

const Header = ({ updateSearchTerm }) => {
  return (
    <div>
      <h1>BOOKS</h1>
      <SearchBox updateSearchTerm={updateSearchTerm} />
    </div>
  );
};

export default Header;



// userID: 117654018978013577386
// personal bookshelf//https://www.googleapis.com/books/v1/users/117654018978013577386/bookshelves/1001/volumes
// specific search term https://www.googleapis.com/books/v1/volumes?q=quilting