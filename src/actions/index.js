import { getLetterMatchCount } from '../helpers'
export const CORRECT_GUESS = 'CORRECT_GUESS';
export const GUESS_WORD = 'GUESS_WORD';

export const guessWord = (guessedWord) => (dispatch, getState) => {
  const secretWord = getState().secretWord;
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
  dispatch({type: GUESS_WORD, payload: { guessedWord, letterMatchCount } });
  if(guessedWord === secretWord) {
    dispatch({type: CORRECT_GUESS});
  }
}