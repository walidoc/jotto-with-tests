import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../test/testUtils'
import Input, { UnconnectedInput } from './Input'

const setup = (initState = {}) => {
  const store = storeFactory(initState);
  return shallow(<Input store={store}/>).dive().dive();
}

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper
    beforeEach(() => {
      const initState = { success: false }
      wrapper = setup(initState);
    })
    it('renders component without error', () => {
      const cmp = findByTestAttr(wrapper, 'input-component');
      expect(cmp.length).toBe(1);
    })
    it('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    })
    it('renders submit button', () => {
      const submitBtn = findByTestAttr(wrapper, 'submit-button');
      expect(submitBtn.length).toBe(1);
    })
  })
  describe('word has been guessed', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup({success: true});
    })
    it('renders component without error', () => {
      const cmp = findByTestAttr(wrapper, 'input-component');
      expect(cmp.length).toBe(1);
    })
    it('does not renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    })
    it('does not renders submit button', () => {
      const submitBtn = findByTestAttr(wrapper, 'submit-button');
      expect(submitBtn.length).toBe(0);
    })
  })
})

describe('redux props', () => {
  it('has success piece of state as props', () => {
    const success = true;
    const wrapper = setup({success});
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  })
  it('`guessWord` action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  })
})

describe('`guessWord` action creator call', () => {
  it('runs `guessWord` on submit clicked', () => {
    const guessWordMock = jest.fn();
    const props = {
      success: false,
      guessWord: guessWordMock
    }
    const wrapper = shallow(<UnconnectedInput {...props}/>)
    const submitBtn = findByTestAttr(wrapper, 'submit-button'); 
    submitBtn.simulate('click');
  
    // const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordMock).toHaveBeenCalled();
  })
})