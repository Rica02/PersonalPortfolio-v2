import React from "react";
import { useNav } from "../../hooks/useNav";

const ContactMe = () => {
  const contactMeRef = useNav("contactme");

  return (
    <section id="contactme" ref={contactMeRef}>
      <header>
        <h1>Contact Me</h1>
      </header>
    </section>
  );
};

export default ContactMe;
