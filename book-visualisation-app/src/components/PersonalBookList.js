import React, { Component } from 'react';
import axios from 'axios';
import Book from './Book'

class PersonalBookList extends Component {
  state = {
    books: null,
    isLoading: true
  }

  componentDidMount() {
    console.log('mount')
    this.fetchBooks();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('updateeeeeee!!')
    if (prevProps.searchTerm !== this.props.searchTerm) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${this.props.searchTerm}`)
        .then(({ data }) => this.setState({ books: data.items, isLoading: false }))
    }
  }


  fetchBooks = () => {
    const url = 'https://www.googleapis.com/books/v1/users/117654018978013577386/bookshelves/1001/volumes'
    axios
      .get(url)
      .then(({ data }) => {
        console.log(data.items, '< ----')
        this.setState({ books: data.items, isLoading: false })
      })
  }

  render() {
    const { books, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <ul>
          {books.map(book => {
            const { id, volumeInfo: { title, authors, imageLinks: { thumbnail } } } = book;
            return (
              <Book key={id} id={id} title={title} authors={authors} thumbnail={thumbnail} />
            )
          })}
        </ul>
      </div>
    );
  }
}

export default PersonalBookList;