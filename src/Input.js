import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Input extends Component {
  
  render() {
    const { success } = this.props;

    return (
      <div data-test="input-component">
        { !success && (
          <form className="form-inline">
            <input 
              type="text" 
              data-test="input-box"
              className="mb-2 mx-sm-3"
              placeholder="enter guess"
              id="word-guess"
            />
            <button 
              data-test="submit-button"
              className="btn btn-primary mb-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => ({
  success
})

export default connect(mapStateToProps)(Input)
