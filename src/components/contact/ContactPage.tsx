import React from "react";
import Links from "../Links";
import "./ContactPage.css";
import Collage from "../../imgs/pictures/collage.png";
import { HiOutlineMail } from "react-icons/all";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="content-page">
        {/*<div className="content-header">*/}
        {/*  <h2 className="content-header-name">Contact</h2>*/}
        {/*</div>*/}
        <div className="content-body">
          <div className="contact-content">
            <div className="contact-text">
              <p>
                If you have any questions or inquiries, you can fill out the
                form below or by emailing{" "}
                <a className="email-link" href="mailto: shiochio@gmail.com">
                  shiochio@gmail.com
                </a>{" "}
                (do not click, example email atm). Let's talk.
              </p>
              <a className="link link-mail" href="mailto: shiochio@gmail.com">
                <HiOutlineMail className="link-icon" />
              </a>
            </div>
            <div className="contact-image-container">
              <img
                className="contact-image"
                src={Collage}
                alt={"artwork_prev"}
              />
            </div>
          </div>
        </div>
      </div>
      <Links />
    </div>
  );
}
