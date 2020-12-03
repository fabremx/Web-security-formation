import React from "react";
import "./home.scss";
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
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Header></Header>

        <div className="welcome">
          <div className="banner">
            <img src={banner} alt="welcome img" />
          </div>
          <div className="background"></div>
          <div className="message">
            <h1>
              Welcome To <br /> Footshop
            </h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur amet lacus enim adipiscing elit.
              <br /> Sed sit amet lacus enim. Ut finibus cursus nunc sed mollis.
            </p>

            <div className="button">
              <p>Shop New</p>
            </div>
          </div>
        </div>

        <div className="category">
          <div className="category-header">
            <h1>Categories</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
          </div>
          <div className="category-container">
            <div class="category-box">
              <div className="img-box">
                <img src={category1} alt="Category 1" />
              </div>
              <div className="label-box">Lorem ipsum dolor</div>
            </div>
            <div class="category-box">
              <div className="img-box">
                <img src={category2} alt="Category 2" />
              </div>
              <div className="label-box">Lorem ipsum dolor</div>
            </div>
            <div class="category-box">
              <div className="img-box">
                <img src={category3} alt="Category 3" />
              </div>
              <div className="label-box">Lorem ipsum dolor</div>
            </div>
          </div>
        </div>

        <div className="blog">
          <div className="blog-header">
            <h1>Latest Blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
          </div>

          <div className="blog-content">
            <div className="news">
              <div className="img-container">
                <img src={blog1} alt="Fusce in augue non nisi fringilla" />
              </div>
              <div className="text-container">
                <h3>Fusce in augue non nisi fringilla</h3>
                <p>
                  Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris
                  molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.
                </p>
                <div className="buttons">
                  <div className="icon">
                    <LoveIcon />
                  </div>
                  <div className="icon">
                    <ViewIcon />
                  </div>
                  <div className="icon">
                    <CommentIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className="news">
              <div className="img-container">
                <img src={blog2} alt="Fusce in augue non nisi fringilla" />
              </div>
              <div className="text-container">
                <h3>Fusce in augue non nisi fringilla</h3>
                <p>
                  Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris
                  molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.
                </p>
                <div className="buttons">
                  <div className="icon">
                    <LoveIcon />
                  </div>
                  <div className="icon">
                    <ViewIcon />
                  </div>
                  <div className="icon">
                    <CommentIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className="news">
              <div className="img-container">
                <img src={blog3} alt="Fusce in augue non nisi fringilla" />
              </div>
              <div className="text-container">
                <h3>Fusce in augue non nisi fringilla</h3>
                <p>
                  Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris
                  molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.
                </p>
                <div className="buttons">
                  <div className="icon">
                    <LoveIcon />
                  </div>
                  <div className="icon">
                    <ViewIcon />
                  </div>
                  <div className="icon">
                    <CommentIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}
