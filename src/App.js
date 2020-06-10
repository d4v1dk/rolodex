import React, { Component } from 'react';
import './App.css';

import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({ monsters: data }))
  }

  onChangeHandler = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    
    return (
      <div className="App">
        <SearchBox placeholder='Search Monsters' handleChange={this.onChangeHandler} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
