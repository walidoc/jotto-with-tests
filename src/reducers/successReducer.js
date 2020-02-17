import { CORRECT_GUESS } from '../actions'

export default (state = false, action) => {
  switch (action.type) {
    case CORRECT_GUESS:
      state = true;
      break;
  
    default:
      break;
  }
  return state;
}