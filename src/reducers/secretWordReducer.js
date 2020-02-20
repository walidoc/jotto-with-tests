import { SET_SECRET_WORD } from '../actions'

export default (state=null, action) => {
  switch (action.type) {
    case SET_SECRET_WORD:
      state = action.payload;
      break;
  
    default:
      break;
  }
  return state;
}