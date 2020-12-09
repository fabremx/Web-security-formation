import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import styles from "./product.module.scss";
import { Snackbar } from "../../components/snackbar";
import { useHistory } from "react-router-dom";

export function Product() {
  const [product, setProduct] = useState("");
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["cart"]);

  const cartId = window.localStorage.getItem("cartId");

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const id = window.location.pathname.split("/").pop();

    try {
      const response = await fetch(`http://localhost:3000/product/${id}`, {
        method: "GET",
      });

      if (response.status !== 200) {
        Snackbar.show("Registration failed !", "error");
        return;
      }

      const result = await response.json();
      setProduct(result.product);
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
                <input defaultValue="1" min="0" max="20" type="number" required />
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
            <div className={styles.review}>
              <div className={styles.content}>
                <div className={styles.avatar}>
                  <img
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="Generic avatar"
                  />
                </div>
                <div className={styles.text}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique
                    necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia,
                    necessitatibus quae sint natus.
                  </p>
                  <small>Posted by Anonymous on 3/1/18</small>
                </div>
              </div>

              <div className={styles.divider} />
            </div>

            <div className={styles.review}>
              <div className={styles.content}>
                <div className={styles.avatar}>
                  <img
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="Generic avatar"
                  />
                </div>
                <div className={styles.text}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique
                    necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia,
                    necessitatibus quae sint natus.
                  </p>
                  <small>Posted by Anonymous on 3/1/18</small>
                </div>
              </div>

              <div className={styles.divider} />
            </div>

            <div className={styles.review}>
              <div className={styles.content}>
                <div className={styles.avatar}>
                  <img
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="Generic avatar"
                  />
                </div>
                <div className={styles.text}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique
                    necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia,
                    necessitatibus quae sint natus.
                  </p>
                  <small>Posted by Anonymous on 3/1/18</small>
                </div>
              </div>

              <div className={styles.divider} />
            </div>
          </div>

          <div className={styles.footer}>
            <button>Leave a Review</button>
          </div>
        </div>
      </div>
    </div>
  );
}
