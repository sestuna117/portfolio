import React from "react";
import Links from "../Links";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="content-page">
        <div className="content-header">
          <h2 className="content-header-name">Contact</h2>
        </div>
        <div className="content-body">
          <p>
            If you have any questions or inquiries, you can fill out the form
            below or by emailing{" "}
            <a className="email-link" href="mailto: shiochio@gmail.com">
              shiochio@gmail.com
            </a>{" "}
            (do not click, example email atm). Let's talk.
          </p>
        </div>
      </div>
      <Links />
    </div>
  );
}
