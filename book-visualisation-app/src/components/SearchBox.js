import React, { Component } from 'react';

class SearchBox extends Component {
  state = {
    input: ""
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>WHAT BOOK DO YOU WANT TO SEE?
        <input onChange={this.handleChange} />
          <button type='submit'>GO!!!</button>
        </label>
      </form>
    );
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value })
    console.log(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ input: this.state.input })
    this.props.updateSearchTerm(this.state.input)
    console.log(this.state.input, '<---in handle submit')
  }
}

export default SearchBox;