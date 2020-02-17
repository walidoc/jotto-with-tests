import React from 'react';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

function App() {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3},
    { guessedWord: 'car', letterMatchCount: 1},
    { guessedWord: 'walid', letterMatchCount: 2}
  ];

  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={guessedWords}/>   
    </div>
  );
}

export default App;
