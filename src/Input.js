import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.inputBox = React.createRef();
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if(guessedWord) {
      this.props.guessWord(guessedWord);
    }
  }

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
              ref={this.inputBox}
            />
            <button 
              data-test="submit-button"
              className="btn btn-primary mb-2"
              type="submit"
              onClick={this.handleSubmit}
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
  success,
})

export default connect(mapStateToProps, { guessWord })(UnconnectedInput)
