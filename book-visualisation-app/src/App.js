import React from 'react';
import './App.css';
import Header from './components/Header';
import PersonalBookList from './components/PersonalBookList';

class App extends React.Component {
  state = {
    searchTerm: ""
  }
  render() {
    return (
      <div className="App" >
        <Header updateSearchTerm={this.updateSearchTerm} />
        <PersonalBookList searchTerm={this.state.searchTerm} />
      </div>
    );
  }
  updateSearchTerm = input => {
    this.setState({ searchTerm: input })
  }
}
//because function declared here, it will have access to the result when submitted in searchbox. Then that result is passed down when final to personal booklist and got access to it on this.props.searchTerm. rerenders when new props or setstate done, will then give back new books on url by searchterm.

export default App;
