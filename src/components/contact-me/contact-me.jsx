import React from 'react';

import './contact-me.scss';

class ContactMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({ name: '', email: '', subject: '', message: '' });
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='form'>
          <input
            onChange={this.handleChange}
            className='name input'
            type='text'
            placeholder='Name:'
            name='name'
            value={this.state.name}
            required
          />
          <input
            onChange={this.handleChange}
            required
            placeholder='Email:'
            className='input email'
            value={this.state.email}
            name='email'
            type='email'
          />
          <input
            onChange={this.handleChange}
            value={this.state.subject}
            required
            placeholder='Subject:'
            className='subject input'
            name='subject'
            type='text'
          />
          <textarea
            value={this.state.message}
            onChange={this.handleChange}
            required
            placeholder='Message:'
            className='message input'
            name='message'
            type='text'
          />
          <button onClick={this.handleSubmit} className='submit'>
            Send Message!
          </button>
        </form>
      </div>
    );
  }
}

export default ContactMe;
