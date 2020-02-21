import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { getSecretWord } from './actions'

export class UnconnectedApp extends Component {

  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    const { success, guessedWords } = this.props;

    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords}/>   
      </div>
    );
  }
}

const mapStateToProps = ({success, guessedWords, secretWord}) => ({
  success,
  secretWord,
  guessedWords
})

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
