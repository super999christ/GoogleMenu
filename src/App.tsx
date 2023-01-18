import React from 'react';
import Logo from './Components/Logo/Logo';
import SearchBar from './Components/SearchBar/SearchBar';
import Container from './Components/Container/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <SearchBar />
      <Container />
    </div>
  );
}

export default App;
