import successReducer from './successReducer'
import { CORRECT_GUESS } from '../actions'

describe('successReducer', () => {
  it('returns default initial state of false when no action made', () => {
    const state = successReducer(undefined, {});
    expect(state).toBe(false);
  })
  it('return the state true upon an action of type "CORRECT_GUESS"', () => {
    const state = successReducer(undefined, {type: CORRECT_GUESS});
    expect(state).toBe(true);
  })
})