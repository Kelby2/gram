import React from 'react';
import { Link } from 'react-router-dom';

class EditUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updateSuccess: false,
      avatarFile: null,
      avatarUrl: this.props.user.avatarUrl,
      fullname: this.props.user.fullname,
      username: this.props.user.username,
      email: this.props.user.email,
      bio: this.props.user.bio,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillUnmount() {
    this.props.clearUserErrors();
  }

  handleInputChange(formField) {
    return (event) => {
      this.setState({ [formField]: event.target.value });
    };
  }

  renderMessage() {
    if (this.state.updateSuccess) {
      return (
        <li
          className='success-message'>
          Profile updated!
        </li>
      )
    } else {
      return (
        this.props.userErrors.map((error, idx) => {
          return <li
            className='error-messages'
            key={`${idx}`}>
            { error }
          </li>
        })
      )
    }
  }

  handleUpdate() {
    event.preventDefault();
    this.props.clearUserErrors();
    this.props.editUser(this.state).then(
      success => this.setState( { updateSuccess: true } ),
      errors => this.setState( { updateSuccess: false } )
    )
  }

  handleBack() {
    event.preventDefault();
    this.props.history.push(`/${this.props.user.username}`)
  }

  render() {

    return (
      <div className='edit-page-container' >
        <main className='edit-page' >

          <article className='user-avatar-container'>
            <div className='user-avatar'>
              <img className='avatar' src={ this.state.avatarUrl } />
            </div>
          </article>

          <article className='user-info'>

            <div className='edit-section'>
              <aside className='form-field'><label>Name</label></aside>
              <input
                className='edit-form-input'
                type='text'
                onChange={this.handleInputChange('fullname')}
                value={ this.state.fullname }>
              </input>
            </div>

            <div className='edit-section'>
              <aside className='form-field'><label>Username</label></aside>
              <input
                className='edit-form-input'
                type='text'
                onChange={this.handleInputChange('username')}
                value={this.state.username}>
              </input>
            </div>

            <div className='edit-section'>
              <aside className='form-field'><label>Email</label></aside>
              <input
                className='edit-form-input'
                type='text'
                onChange={this.handleInputChange('email')}
                value={ this.state.email }>
              </input>
            </div>

            <div className='edit-section'>
              <aside className='form-field'><label>Bio</label></aside>
              <textarea
                className='edit-form-input'
                id='bio-input'
                onChange={this.handleInputChange('bio')}
                value={ this.state.bio }>
              </textarea>
            </div>
          </article>

          <ul className='user-errors'>
            { this.renderMessage()}
          </ul>

          <article
            className='edit-page-buttons-container'>
            <button
              onClick={ this.handleUpdate }
              className='edit-page-buttons'>
              Submit
            </button>
            <button
              className='edit-page-buttons'
              onClick={ this.handleBack }>
              Back
            </button>
          </article>

        </main>
      </div>
    )
  }

}

export default EditUser;
