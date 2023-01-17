import React, { useState } from "react";
import { useNav } from "../../hooks/useNav";
import {
  MainBodyContainer,
  FormContainer,
  Input,
  SendButton,
  TextArea,
} from "./ContactMe.style";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "";
const TEMPLATE_ID = "";
const USER_ID = "";

const ContactMe = () => {
  const contactMeRef = useNav("contactme");

  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (senderName && senderEmail && message) {
      if (isValidEmail(senderEmail)) {
        const templateParams = {
          senderName,
          senderEmail,
          message,
        };

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

        setSenderName("");
        setSenderEmail("");
        setMessage("");
        setEmailSent(true);
      } else {
        alert("Please enter a valid email.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <section id="contactme" ref={contactMeRef}>
      <div className="container">
        <header>
          <h1>Contact me</h1>
        </header>
        <MainBodyContainer>
          <FormContainer>
            <p>
              Want to get in touch with me? You can reach me with the form
              below!
              <br />
              <br />
              I'm open for job offers and available on a full-time capacity.
            </p>
            <Input
              type="text"
              placeholder="Name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
            <TextArea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></TextArea>
            <SendButton onClick={sendEmail}>SEND MESSAGE</SendButton>
            <span className={emailSent ? "visible" : null}>
              Thank you for your message, I will get back to you as soon as
              possible!
            </span>
          </FormContainer>
        </MainBodyContainer>
      </div>
    </section>
  );
};

export default ContactMe;
