import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorText: '',
  }

  renderTOHomepage = () => {
    const {history} = this.props
    history.replace('/bad-path')
    history.replace('/')
  }

  onAuthenticationCredentials = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = `https://apis.ccbp.in/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    // console.log(response)

    if (response.ok === true) {
      this.renderTOHomepage()
    } else {
      const data = await response.json()
      const errorMsg = data.error_msg
      this.setState({errorText: errorMsg})
      console.log(data)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserField = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="userNameId" className="username-label">
          USERNAME
        </label>
        <input
          type="text"
          id="userNameId"
          value={username}
          className="username-input"
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="passwordId" className="username-label">
          PASSWORD
        </label>
        <input
          type="password"
          id="passwordId"
          value={password}
          className="username-input"
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {errorText} = this.state

    return (
      <div className="loginForm-main-con">
        <div className="login-con">
          <img
            className="login-img-sty"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
            alt="website login"
          />
          <form
            className="login-credentials-con"
            onSubmit={this.onAuthenticationCredentials}
          >
            <img
              className="login-logo-sty"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
              alt="website logo"
            />
            <div className="input-con">{this.renderUserField()}</div>
            <div className="input-con">{this.renderPasswordField()}</div>
            <button type="submit" className="login-btn-sty">
              Login
            </button>

            <p className="error-msg">{errorText}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
