import styles from "./contact.module.scss";
import { ReactComponent as LocationIcon } from "../../assets/images/location.svg";
import { ReactComponent as PhoneIcon } from "../../assets/images/phone.svg";
import { ReactComponent as MailIcon } from "../../assets/images/mail.svg";

export function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.form}>
          <h2>GET IN TOUCH</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio justo, ultrices ac nisl sed, lobortis porta elit.
            Fusce in metus ac ex venenatis ultricies at cursus mauris.
          </p>

          <form>
            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.formControl}
                id="name"
                name="name"
                placeholder="Your Name"
                required
                data-error="Please enter your name"
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Your Email"
                id="email"
                className={styles.formControl}
                name="name"
                required
                data-error="Please enter your email"
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.formControl}
                id="subject"
                name="name"
                placeholder="Subject"
                required
                data-error="Please enter your Subject"
              />
            </div>

            <div className={styles.formGroup}>
              <textarea
                className={styles.formControl}
                id="message"
                placeholder="Your Message"
                rows="4"
                data-error="Write your message"
                required
              ></textarea>
            </div>

            <div className={styles.submit}>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>

        <div className={styles.info}>
          <h2>CONTACT INFO</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id
            eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.{" "}
          </p>
          <div className={styles.address}>
            <LocationIcon /> Address: Michael I. Days 3756 <br />
            Preston Street Wichita,
            <br /> KS 67213{" "}
          </div>
          <div className={styles.phone}>
            <PhoneIcon /> Phone: <a href="tel:+1-888705770">+1-888 705 770</a>
          </div>
          <div className={styles.mail}>
            <MailIcon /> Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
