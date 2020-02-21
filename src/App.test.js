import React from 'react';
import App from './App';

import { storeFactory } from '../test/testUtils';
import { shallow } from 'enzyme';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<App store={store}/>).dive().dive();
} 

describe('redux props', () => {
  it('has `success` piece of state as props', () => {
    const success = true;
    const wrapper = setup({success});
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  })
  it('has `secretWord` piece of state as props', () => {
    const secretWord = 'party';
    const wrapper = setup({secretWord});
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  })
  it('has `guessedWords` piece of state as props', () => {
    const guessedWords = [{guessedWord: 'train', letterMatchCount: 3}];
    const wrapper = setup({guessedWords});
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  })
  it('has `getSecretWord` action creator prop method', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  })
})

