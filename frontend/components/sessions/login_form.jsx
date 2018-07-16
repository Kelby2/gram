import React from 'react';
import DemoButton from './demo_button';

const inputFields = ['Username', 'Password'];

class LoginForm extends React.Component {

  state = {
    username: '',
    password: ''
  }

  renderErrors() {
    return (
      this.props.sessionsErrors.map((error, idx) => {
        return (
          <li
            className='error-messages'
            key={`${idx}`}>
            {error}
          </li>
        );
      })
    );
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { username } = this.state;
    const user = {...this.state, username: username.toLowerCase()};
    this.props.login(user);
  }

  handleInputChange(inputField) {
    return e => {
      this.setState({ [inputField]: e.target.value });
    };
  }

  renderInputField(field) {
    const fieldValue = field.replace(/ /g,'').toLowerCase();

    return (
      <input
        key={field}
        className='session-form-input'
        type={fieldValue === 'password' ? 'password' : 'text'}
        value={this.state[`${fieldValue}`]}
        onChange={this.handleInputChange(`${fieldValue}`).bind(this)}
        placeholder={field}
      />
    );
  }

  render () {
    return (
        <div className='main-entry-form' id="main-form">
          <h2 className='title'>pxlgram</h2><br />
          <form onSubmit={this.handleFormSubmit.bind(this)} className='entry-form'>
            {inputFields.map(field => {
              return this.renderInputField(field);
            })}
            <input
              className='submit-button'
              type='submit'
              value='Log In' />
            <DemoButton />
          </form>
          <ul>{this.renderErrors()}<br /></ul>
        </div>
    );
  }
}

export default LoginForm;
