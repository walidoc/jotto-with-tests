import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = ({ guessedWords }) => {
  return (
    <div data-test="guessed-words-cmp">
      { guessedWords.length ? (
        <div>
          <span> { guessedWords[0].guessedWord } </span>
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
