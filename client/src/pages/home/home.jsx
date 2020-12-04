import styles from "./home.module.scss";
import banner from "../../assets/images/banner.jpg";
import category1 from "../../assets/images/category-01.jpg";
import category2 from "../../assets/images/category-02.jpg";
import category3 from "../../assets/images/category-03.jpg";
import blog1 from "../../assets/images/blog-01.jpg";
import blog2 from "../../assets/images/blog-02.jpg";
import blog3 from "../../assets/images/blog-03.jpg";
import { ReactComponent as LoveIcon } from "../../assets/images/like.svg";
import { ReactComponent as ViewIcon } from "../../assets/images/eye.svg";
import { ReactComponent as CommentIcon } from "../../assets/images/comment.svg";

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <div className={styles.banner}>
          <img src={banner} alt="welcome img" />
        </div>
        <div className={styles.background}></div>
        <div className={styles.message}>
          <h1>
            Welcome To <br /> Footshop
          </h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur amet lacus enim adipiscing elit.
            <br /> Sed sit amet lacus enim. Ut finibus cursus nunc sed mollis.
          </p>

          <div className={styles.button}>
            <p>Shop New</p>
          </div>
        </div>
      </div>

      <div className={styles.category}>
        <div className={styles.categoryHeader}>
          <h1>Categories</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
        </div>
        <div className={styles.categoryContainer}>
          <div className={styles.categoryBox}>
            <div className={styles.imgBox}>
              <img src={category1} alt="Category 1" />
            </div>
            <div className={styles.labelBox}>Lorem ipsum dolor</div>
          </div>
          <div className={styles.categoryBox}>
            <div className={styles.imgBox}>
              <img src={category2} alt="Category 2" />
            </div>
            <div className={styles.labelBox}>Lorem ipsum dolor</div>
          </div>
          <div className={styles.categoryBox}>
            <div className={styles.imgBox}>
              <img src={category3} alt="Category 3" />
            </div>
            <div className={styles.labelBox}>Lorem ipsum dolor</div>
          </div>
        </div>
      </div>

      <div className={styles.blog}>
        <div className={styles.blogHeader}>
          <h1>Latest Blog</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
        </div>

        <div className={styles.blogContent}>
          <div className={styles.news}>
            <div className={styles.imgContainer}>
              <img src={blog1} alt="Fusce in augue non nisi fringilla" />
            </div>
            <div className={styles.textContainer}>
              <h3>Fusce in augue non nisi fringilla</h3>
              <p>
                Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris
                molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.
              </p>
              <div className={styles.buttons}>
                <div className={styles.icon}>
                  <LoveIcon />
                </div>
                <div className={styles.icon}>
                  <ViewIcon />
                </div>
                <div className={styles.icon}>
                  <CommentIcon />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.news}>
            <div className={styles.imgContainer}>
              <img src={blog2} alt="Fusce in augue non nisi fringilla" />
            </div>
            <div className={styles.textContainer}>
              <h3>Fusce in augue non nisi fringilla</h3>
              <p>
                Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris
                molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.
              </p>
              <div className={styles.buttons}>
                <div className={styles.icon}>
                  <LoveIcon />
                </div>
                <div className={styles.icon}>
                  <ViewIcon />
                </div>
                <div className={styles.icon}>
                  <CommentIcon />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.news}>
            <div className={styles.imgContainer}>
              <img src={blog3} alt="Fusce in augue non nisi fringilla" />
            </div>
            <div className={styles.textContainer}>
              <h3>Fusce in augue non nisi fringilla</h3>
              <p>
                Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris
                molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.
              </p>
              <div className={styles.buttons}>
                <div className={styles.icon}>
                  <LoveIcon />
                </div>
                <div className={styles.icon}>
                  <ViewIcon />
                </div>
                <div className={styles.icon}>
                  <CommentIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
