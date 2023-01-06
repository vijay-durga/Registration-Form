import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isValidNames: false,
    isErrorInFirstName: false,
    isErrorInLastName: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  validFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validFirstName()
    this.setState({isErrorInFirstName: !isValidFirstName})
  }

  validLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  onBlurLastName = () => {
    const isValidLastName = this.validLastName()
    this.setState({isErrorInLastName: !isValidLastName})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirst = this.validFirstName()
    const isValidLast = this.validLastName()

    if (isValidFirst && isValidLast) {
      this.setState({isValidNames: true})
    } else {
      this.setState({
        isErrorInFirstName: !isValidFirst,
        isErrorInLastName: !isValidLast,
        isValidNames: false,
      })
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isValidNames: !prevState.isValidNames,
      firstName: '',
      lastName: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <div className="page-2-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isValidNames, isErrorInFirstName, isErrorInLastName} = this.state

    return (
      <div>
        {isValidNames ? (
          this.renderSubmissionSuccessView()
        ) : (
          <div className="background-cont">
            <h1 className="head">Registration</h1>
            <form onSubmit={this.onSubmitForm}>
              <div>
                <div className="input-cont">
                  <label htmlFor="FirstName" className="input-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="FirstName"
                    id="FirstName"
                    onChange={this.onChangeFirstName}
                    onBlur={this.onBlurFirstName}
                    className="input-text"
                  />
                </div>
                {isErrorInFirstName && <p className="require-msg">Required</p>}

                <div className="input-cont">
                  <label htmlFor="LastName" className="input-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="LastName"
                    id="LastName"
                    onChange={this.onChangeLastName}
                    onBlur={this.onBlurLastName}
                    className="input-text"
                  />
                </div>
                {isErrorInLastName && <p className="require-msg">Required</p>}
              </div>

              <div className="sub-btn">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
