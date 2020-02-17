import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = ({ guessedWords }) => {
  return (
    <div data-test="guessed-words-cmp">
      { guessedWords.length ? (
        <div data-test="guessed-words-section">
          <h3>Guessed Words</h3>
          <table>
            <thead>
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
          <span>some instructions</span>
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
