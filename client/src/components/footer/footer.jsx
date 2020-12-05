import React from "react";
import { ReactComponent as LocationIcon } from "../../assets/images/location.svg";
import { ReactComponent as PhoneIcon } from "../../assets/images/phone.svg";
import { ReactComponent as MailIcon } from "../../assets/images/mail.svg";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.section}>
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
        <div className={styles.section}>
          <h4>Contact Us</h4>
          <div className={styles.address}>
            <LocationIcon /> Address: 10 Rue de la Paix <br />
            Paris, 75018,
            <br /> France
          </div>
          <div className={styles.phone}>
            <PhoneIcon /> Phone: <a href="tel:+1-888705770">+33 1 15 47 87 10</a>
          </div>
          <div className={styles.mail}>
            <MailIcon /> Email: <a href="mailto:footshop@gmail.com">footshop@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
