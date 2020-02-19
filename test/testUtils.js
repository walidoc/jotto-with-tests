import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../src/reducers'
import { middlewares } from '../src/configureStore'

export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}

export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)

export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps, 
    'prop', 
    component.name);
  expect(propError).toBeUndefined();
}