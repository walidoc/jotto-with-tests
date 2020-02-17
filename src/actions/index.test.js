import { correctGuess, CORRECT_GUESS } from './index'

describe('correctGuess', () => {
  it('returns an action with type "CORRECT_GUESS" ', () => {
    const action = correctGuess();
    expect(action).toEqual({type: CORRECT_GUESS})
  })
})