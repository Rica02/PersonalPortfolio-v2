import React, { useState, useRef } from 'react';
import {
  MainBodyContainer,
  FormContainer,
  Input,
  SendButton,
  TextArea,
} from './ContactMe.style';
import { useNav } from '../../hooks/useNav';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const contactMeRef = useNav('contactme');
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form
    if (
      document.getElementById('user_name').value &&
      document.getElementById('user_email').value &&
      document.getElementById('message').value
    ) {
      if (isValidEmail(document.getElementById('user_email').value)) {
        // Send email
        emailjs
          .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );

        // Clear form and show confirmation message
        document.getElementById('contact-form').reset();
        setEmailSent(true);
      } else {
        alert('Please enter a valid email.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Email validation (simple regex)
  const isValidEmail = (email) => {
    return email.match(/^\S+@\S+\.\S+$/);
  };

  return (
    <section id="contactme" ref={contactMeRef}>
      <div className="container">
        <header>
          <h1>Contact me</h1>
        </header>
        <MainBodyContainer>
          {/* Contact me form */}
          {/* <FormContainer ref={form} onSubmit={sendEmail} id="contact-form">
            <p>
              Did I catch your eye? Feel free to contact me!
              <br />
              <br />
              You can reach me with the form below :)
            </p>
            <Input
              id="user_name"
              type="text"
              name="user_name"
              placeholder="Name"
            />
            <Input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="Email"
            />
            <TextArea id="message" name="message" placeholder="Your message" />
            <SendButton type="submit" value="SEND MESSAGE" />
            <span className={emailSent ? "visible" : null}>
              Thank you for your message, I will get back to you as soon as
              possible!
            </span>
          </FormContainer> */}
          <FormContainer ref={form} onSubmit={sendEmail} id="contact-form">
            <p>Did I catch your eye?</p>
            <p>
              CONTACT ME @ <b>ricamaeaverion22@gmail.com</b>
            </p>
          </FormContainer>
        </MainBodyContainer>
      </div>
    </section>
  );
};

export default ContactMe;
