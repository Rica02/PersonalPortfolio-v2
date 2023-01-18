import React from "react";
import { Container } from "./SocialButtons.style";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

import resumeFile from "../../assets/resume.pdf";

const SocialButtons = () => {
  return (
    <Container>
      {/* On hover, show text above icon */}
      <div>
        <p>resume</p>
        <HiDocumentText
          className="icon"
          onClick={() => {
            window.open(resumeFile, "_blank");
          }}
        />
      </div>
      <div>
        <p>contact</p>
        <MdEmail
          className="icon"
          onClick={() =>
            document
              .getElementById("contactme")
              .scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <div>
        <p>linkedin</p>
        <FaLinkedin
          className="icon"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/ricamaeaverion/",
              "_blank"
            );
          }}
        />
      </div>
      <div>
        <p>github</p>
        <FaGithubSquare
          className="icon"
          onClick={() => {
            window.open("https://github.com/Rica02", "_blank");
          }}
        />
      </div>
    </Container>
  );
};

export default SocialButtons;
