import styles from "./about.module.scss";
import Shop from "../../assets/images/shop.jpg";
import Employee1 from "../../assets/images/employee-01.jpg";
import Employee2 from "../../assets/images/employee-02.jpg";
import Employee3 from "../../assets/images/employee-03.jpg";
import Employee4 from "../../assets/images/employee-04.jpg";
import { Divider } from "antd";

export function About() {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.photo}>
            <img src={Shop} alt="Shop" />
          </div>
          <div className={styles.text}>
            <h2>
              We are <span>Foothshop</span>
            </h2>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
              enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
              aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
              molestiae consequatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button>Read More</button>
          </div>
        </div>

        <div className={styles.qualities}>
          <div className={styles.quality}>
            <h3>We are Trusted</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>

          <div className={styles.quality}>
            <h3>We are Professional</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>

          <div className={styles.quality}>
            <h3>We are Expert</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </div>

        <div className={styles.team}>
          <h2>Meet Our Team</h2>

          <div className={styles.employeeContainer}>
            <div className={styles.employee}>
              <img src={Employee1} alt="Kristiana" />
              <h3>Kristiana</h3> <span className={styles.post}>Web Developer</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat
                id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.{" "}
              </p>
              <Divider orientation="left" style={{ margin: "0" }}></Divider>
            </div>

            <div className={styles.employee}>
              <img src={Employee2} alt="William" />
              <h3>William</h3> <span className={styles.post}>Product Owner</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat
                id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.{" "}
              </p>
              <Divider orientation="left" style={{ margin: "0" }}></Divider>
            </div>

            <div className={styles.employee}>
              <img src={Employee3} alt="Paul" />
              <h3>Paul</h3> <span className={styles.post}>Scrum Master</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat
                id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.{" "}
              </p>
              <Divider orientation="left" style={{ margin: "0" }}></Divider>
            </div>

            <div className={styles.employee}>
              <img src={Employee4} alt="Thomas" />
              <h3>Thomas</h3> <span className={styles.post}>Manager</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat
                id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.{" "}
              </p>
              <Divider orientation="left" style={{ margin: "0" }}></Divider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
