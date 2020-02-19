import { GUESS_WORD } from '../actions';

export default (state=[], action) => {
  switch (action.type) {
    case GUESS_WORD:
      state = [
        ...state,
        action.payload
      ]
      break;
  
    default:
      break;
  }
  return state;
}