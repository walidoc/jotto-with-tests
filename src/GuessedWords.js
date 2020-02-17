import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = ({ guessedWords }) => {
  return (
    <div data-test="guessed-words-cmp">
      { guessedWords.length ? (
        <div data-test="guessed-words-section">
          <h3>Guessed Words</h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
            {
              guessedWords.map((guessedWordObj, idx) => (
                <tr data-test="guessed-word" key={idx}>
                  <td> { guessedWordObj.guessedWord } </td>
                  <td> { guessedWordObj.letterMatchCount } </td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
      ): (
        <div data-test="guessed-instructions-cmp">
          <span>Try to guess the secret word</span>
        </div>
      )}
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default GuessedWords
