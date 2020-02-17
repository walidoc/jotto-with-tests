import successReducer from './successReducer'
import { correctGuess } from '../actions'

describe('successReducer', () => {
  it('returns default initial state of false when no action made', () => {
    const state = successReducer(undefined, {});
    expect(state).toBe(false);
  })
  it('return the state true upon an action of type "CORRECT_GUESS"', () => {
    const state = successReducer(undefined, correctGuess());
    expect(state).toBe(true);
  })
})