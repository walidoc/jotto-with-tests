import React from 'react'
import PropTypes from 'prop-types'

const Congrats = ({success}) => (
  <div data-test="congrats-component">
    { success ? (
      <div data-test="congrats-message" className="alert alert-success">
        <span>
          Congrats! you guessed the word!
        </span>
      </div>
    ) : (
      <div>
        {/* <input placeholder="Guess word"/> */}
        {/* <label htmlFor="">Check</label> */}
      </div>
    )}
  </div>
)

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}
export default Congrats
