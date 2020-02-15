import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3}]
}
const setup = (props = defaultProps) => shallow(<GuessedWords {...props}/>)

describe('if there is no words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ guessedWords: []});
  })
  it('should render without crashing', () => {
    const cmp = findByTestAttr(wrapper, 'guessed-words-cmp');
    expect(cmp.length).toBe(1);
  })
  it('renders instructions to guessed word', () => {
    const cmp = findByTestAttr(wrapper, 'guessed-instructions-cmp');
    expect(cmp.text().length).not.toBe(0);
  })
})

describe('if there are words guessed', () => {
  it('does not throw worning with the expected props', () => {
    checkProps(GuessedWords, defaultProps);
  })
})