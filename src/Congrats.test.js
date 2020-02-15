import React from 'react';
import { shallow } from 'enzyme'
import Congrats from './Congrats'
import { findByTestAttr, checkProps } from '../test/testUtils'


const setup = (props = { success: false }) => shallow(<Congrats {...props}/>);


it('renders without crashing', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'congrats-component');
  expect(component.length).toBe(1);
})
it('renders no text when the `success` prop is false', () => {
  const wrapper = setup({success: false});
  const component = findByTestAttr(wrapper, 'congrats-component');
  expect(component.text()).toBe('');
})
it('renders text when the `success` prop is true', () => {
  const wrapper = setup({success: true});
  const message = findByTestAttr(wrapper, 'congrats-component');
  expect(message.text().length).not.toBe(0);
})
it('does not throw error with the expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
})