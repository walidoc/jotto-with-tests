import { getLetterMatchCount } from './index'

describe('getLetterMatchCount', () => {
  const secretWord = 'walid'
  it('returns the correct count when there are no matching letters', () => {
    const guessedWord = 'test';
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    expect(letterMatchCount).toBe(0);
  })
  it('returns the correct count when there are 3 matching letters', () => {
    const guessedWord = 'wal';
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    expect(letterMatchCount).toBe(3);
  })
  it('returns the correct count when there are duplicate letters in the guess', () => {
    const guessedWord = 'rahali';
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    expect(letterMatchCount).toBe(3);
  })
})