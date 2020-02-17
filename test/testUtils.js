import checkPropTypes from 'check-prop-types'
import { createStore } from 'redux'

import rootReducer from '../src/reducers'

export const storeFactory = initialState => createStore(rootReducer, initialState)

export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)

export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps, 
    'prop', 
    component.name);
  expect(propError).toBeUndefined();
}