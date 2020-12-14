import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import styles from "./product.module.scss";
import avatar from "../../assets/images/avatar.png";
import { Snackbar } from "../../components/snackbar";
import { useHistory } from "react-router-dom";

export function Product() {
  const [product, setProduct] = useState("");
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [leavingReview, setLeavingReview] = useState(false);
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["cart"]);

  const cartId = window.localStorage.getItem("cartId");

  useEffect(() => {
    getProduct();
    getProductReviews();
  }, []);

  const getProduct = async () => {
    const id = window.location.pathname.split("/").pop();

    try {
      const response = await fetch(`http://localhost:3000/product/${id}`, {
        method: "GET",
      });

      if (response.status !== 200) {
        Snackbar.show("Product fetch failed !", "error");
        return;
      }

      const result = await response.json();
      setProduct(result.product);
    } catch (error) {
      Snackbar.show("Something went wrong", "error");
    }
  };

  const getProductReviews = async () => {
    const id = window.location.pathname.split("/").pop();

    try {
      const response = await fetch(`http://localhost:3000/product/${id}/reviews`, {
        method: "GET",
      });

      if (response.status !== 200) {
        Snackbar.show("Reviews fetch failed !", "error");
        return;
      }

      const result = await response.json();
      setReviews(result.reviews);
    } catch (error) {
      Snackbar.show("Something went wrong", "error");
    }
  };

  const goToProducts = () => {
    addToCart();
    history.push("/products");
  };

  const addToCart = () => {
    if (!cookies.cart) {
      setCookie("cart", product._id, { path: "/" });
    } else {
      const cartItems = cookies.cart;
      setCookie("cart", `${cartItems},${product._id}`, { path: "/" });
    }

    Snackbar.show("Product successfully added to cart", "success");
  };

  const cancelReview = () => {
    setNewReview("");
    setLeavingReview(!leavingReview);
  };

  const sendReview = async (e) => {
    e.preventDefault();
    const id = window.location.pathname.split("/").pop();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    try {
      const response = await fetch(`http://localhost:3000/product/${id}/review`, {
        method: "POST",
        headers,
        credentials: "include",
        body: JSON.stringify({
          message: newReview,
        }),
      });

      if (response.status === 401) {
        Snackbar.show("Unauthorized !", "error");
        return;
      } else if (response.status !== 200) {
        Snackbar.show("Add review failed !", "error");
        return;
      }

      getProductReviews();
    } catch (error) {
      Snackbar.show("Something went wrong", "error");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {product && (
          <div className={styles.product}>
            <div className={styles.photo}>
              <img src={product.image} alt={product.title} />
            </div>

            <div className={styles.info}>
              <h2>{product.title}</h2>
              <h5>
                <del>$ 180.00</del> ${product.price}
              </h5>

              <p className={styles.stock}> More than 20 available</p>
              <h4>Short Description:</h4>
              <p className={styles.description}>{product.description}</p>

              <div className={styles.quantity}>
                <label>Quantity</label>
                <input defaultValue="1" min="0" max="20" type="number" required disabled />
              </div>

              <div className={styles.actions}>
                {cartId && (
                  <>
                    <button className={styles.cart} onClick={goToProducts}>
                      Add to cart
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <div className={styles.reviews}>
          <div className={styles.header}>
            <h2>Product Reviews</h2>
          </div>

          <div className={styles.body}>
            {reviews.length > 0 &&
              reviews.map((review) => (
                <div className={styles.review} key={review._id}>
                  <div className={styles.content}>
                    <div className={styles.avatar}>
                      <img src={avatar} alt="Generic avatar" />
                    </div>
                    <div className={styles.text}>
                      <div dangerouslySetInnerHTML={{ __html: review.message }} />
                      <small>Posted by Anonymous on 3/1/18</small>
                    </div>
                  </div>

                  <div className={styles.divider} />
                </div>
              ))}

            {reviews.length === 0 && <p>No Reviews</p>}
          </div>

          <div className={styles.footer}>
            {leavingReview && (
              <form className={styles.reviewForm}>
                <div className={styles.inputGroup}>
                  <label htmlFor="review">Review *</label>
                  <textarea type="text" value={newReview} onChange={(e) => setNewReview(e.target.value)} required />
                </div>

                <div className={styles.buttons}>
                  <button onClick={() => cancelReview()}>Cancel Review</button>
                  <button type="submit" onClick={(e) => sendReview(e)}>
                    Send
                  </button>
                </div>
              </form>
            )}

            {!leavingReview && <button onClick={() => setLeavingReview(!leavingReview)}>Leave a Review</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
