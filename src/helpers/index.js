export const getLetterMatchCount = (guessedWord, secretWord) => {
  const guessedWordSet = new Set(guessedWord);
  const secretWordSet = new Set(secretWord);
  return [...secretWordSet].filter(letter => guessedWordSet.has(letter)).length;
}