import React from 'react'
import PropTypes from 'prop-types'

const Congrats = ({success}) => (
  <div data-test="congrats-component">
    { success ? (
      <span data-test="congrats-message">
        congrats
      </span>
    ) : (
      <div>
        <input placeholder="Guess word"/>
        {/* <label htmlFor="">Check</label> */}
      </div>
    )}
  </div>
)

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}
export default Congrats
