import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

import './contact-me.scss';
import './contact-me.media.scss';

import CustomButton from '../custombutton/custombutton';

const SERVICE_ID = 'service_86atefd';
const TEMPLATE_ID = 'template_icm2lr7';
const USER_ID = 'QdZ1IWd_VGfEq2ZQ6';

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
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (res) => {
        console.log(res.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully!',
        });
      },
      (error) => ({
        icon: 'error',
        title: 'Oooops, Something went wrong',
        text: error.text,
      })
    );
    this.setState({ name: '', email: '', subject: '', message: '' });
  }

  render() {
    return (
      <div className='contact-me-container'>
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
          <CustomButton onClick={this.handleSubmit} data={'Send Message!'} />
        </form>
      </div>
    );
  }
}

export default ContactMe;
