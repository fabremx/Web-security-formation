import React from "react";
import { ReactComponent as LocationIcon } from "../../assets/images/location.svg";
import { ReactComponent as PhoneIcon } from "../../assets/images/phone.svg";
import { ReactComponent as MailIcon } from "../../assets/images/mail.svg";
import "./footer.scss";

export function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="container">
          <div className="section">
            <h4>About Freshshop</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.{" "}
            </p>
          </div>
          <div className="section">
            <h4>Contact Us</h4>
            <div className="address">
              <LocationIcon /> Address: Michael I. Days 3756 <br />
              Preston Street Wichita,
              <br /> KS 67213{" "}
            </div>
            <div className="phone">
              <PhoneIcon /> Phone: <a href="tel:+1-888705770">+1-888 705 770</a>
            </div>
            <div className="mail">
              <MailIcon /> Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
