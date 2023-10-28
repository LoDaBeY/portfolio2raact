import React from "react";
import "./Footer.css";
import "./FooterTabletView.css";
import {
  AiOutlineSlack,
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineClose,
} from "react-icons/ai";
import { useState } from "react";

function Footer() {
  const [Forum, setForum] = useState(false);
  return (
    <div>
      {/* Contact
      let's Talk
      Info
      Designed and developed by Khaled Ghonim © 2024.
      */}
      <div className="Contact">
        <div className="LetsTalk">
          <div className="LetsTalkH">
            <h2>Let's Talk</h2>
          </div>
          <div className="brief">
            <span>
              Each project commences with a professional dialogue, with me
              taking the lead in these discussions. I am more than willing to
              engage in a comprehensive discussion about your project's details
              and, when necessary for larger projects, assemble the appropriate
              team members.
            </span>
          </div>

          {Forum && (
            <div className="Forum">
              <div className="ContactUsForum">
                <div className="colsure">
                  <AiOutlineClose
                    onClick={() => {
                      setForum(false);
                    }}
                    className="Close"
                  />
                </div>
                <h2 className="ContanctUsForumHeader">Contact Us</h2>

                <div className="fristName">
                  <h4>Name and Surname</h4>
                  <input
                    placeholder="Place your name and surname here"
                    type="text"
                    name="Name"
                  />
                </div>
                <div className="Email">
                  <h4>Email</h4>
                  <input
                    placeholder="Place your Email here"
                    type="email"
                    name="Email"
                  />
                </div>
                <div className="WriteAMessage">
                  <h4>Write a Message</h4>
                  <input
                    placeholder="Write your Project details here"
                    type="text"
                    name="WriteAMessage"
                  />
                </div>
                <div className="SubmitDiv">
                  <input id="Submit" type="submit" value="Submit" />
                </div>
              </div>
            </div>
          )}

          <div className="LetsTalkBtn">
            <input
              onClick={() => {
                setForum(true);
              }}
              type="button"
              value="Tell us about your project"
            />
          </div>
        </div>
        <div className="Info">
          <div className="ContactInfo">
            <h5>Email </h5>
            <h6>Khaledonem89@gmail.com</h6>
            <div className="ContactInfo">
              <h5>Telephone Number </h5>
              <h6>90 531 904 58 91</h6>
            </div>
          </div>

          <div className="ContactIcons">
            <a href="https://www.facebook.com/people/Khaled-M-Onem/">
              <AiFillFacebook />
            </a>
            <a href="https://www.linkedin.com/in/khaled-ghonim-4a4007147/">
              <AiFillLinkedin />
            </a>
            <a href="https://wa.me/905319045891">
              <AiOutlineWhatsApp />
            </a>
            <a href="https://join.slack.com/t/kgtranslationservices/shared_invite/zt-1we9k8gw3-ZnuupQXaD3iPj8VQAS3qlg">
              <AiOutlineSlack />
            </a>
          </div>
        </div>
      </div>
      <div className="KGsginture">
        <h4>
          {" "}
          Designed and developed by Khaled <p>Ghonim</p> © 2024.
        </h4>
      </div>
    </div>
  );
}

export default Footer;
