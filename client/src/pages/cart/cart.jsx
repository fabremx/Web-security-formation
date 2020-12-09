import { useState, useEffect } from "react";
import styles from "./cart.module.scss";
import { ReactComponent as RemoveIcon } from "../../assets/images/remove.svg";
import { Link } from "react-router-dom";
import { OrderSummary } from "../../components/orderSummary";
import Payement1 from "../../assets/images/payement-01.png";
import Payement2 from "../../assets/images/payement-02.png";
import Payement3 from "../../assets/images/payement-03.png";
import Payement5 from "../../assets/images/payement-05.png";
import Payement7 from "../../assets/images/payement-07.png";
import { Divider } from "antd";
import { Snackbar } from "../../components/snackbar";
import { useCookies } from "react-cookie";

export function Cart() {
  const [user, setUser] = useState(undefined);
  const [products, setProducts] = useState([]);
  const [cookies] = useCookies(["cart"]);

  useEffect(() => {
    getUserInfo();
    // getCartProducts();
  }, []);

  const getUserInfo = async () => {
    const cartId = window.location.pathname.split("/").pop();

    try {
      const response = await fetch(`http://localhost:3000/user/${cartId}`, {
        method: "GET",
      });

      if (response.status !== 200) {
        Snackbar.show("User info fetch failed !", "error");
        return;
      }

      const result = await response.json();
      setUser(result.user);
    } catch (error) {
      Snackbar.show("Something went wrong", "error");
    }
  };

  const getCartProducts = async () => {
    const productIds = cookies.cart;

    try {
      const response = await fetch(`http://localhost:3000/products?ids=${productIds}`, {
        method: "GET",
      });

      if (response.status !== 200) {
        Snackbar.show("Products fetch failed !", "error");
        return;
      }

      const result = await response.json();
      setProducts(result.products);
    } catch (error) {
      Snackbar.show("Something went wrong", "error");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.cart}>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td className={styles.photo}>
                    <Link to={`/product/${product._id}`}>
                      <img src={product.images} alt="product" />
                    </Link>
                  </td>
                  <td className={styles.name}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                  </td>
                  <td className={styles.price}>
                    <p>$ {product.price}</p>
                  </td>
                  <td className={styles.quantity}>
                    <input type="number" size="4" defaultValue="1" min="0" step="1" />
                  </td>
                  <td className={styles.total}>
                    <p>$ {product.price}</p>
                  </td>
                  <td className={styles.remove}>
                    <RemoveIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.buttons}>
          <div className={styles.coupon}>
            <input placeholder="Enter your coupon code" aria-label="Coupon code" type="text" />
            <div className={styles.apply}>
              <button type="button">Apply Coupon</button>
            </div>
          </div>
          <div className={styles.updateCart}>
            <button type="button">Update Cart</button>
          </div>
        </div>

        <h2 className={styles.summaryTitle}>Summary</h2>
        <Divider orientation="left" style={{ margin: "0" }}></Divider>

        {user && (
          <div className={styles.summary}>
            <div className={styles.summaryLeft}>
              <div className={styles.address}>
                <h3 className={styles.title}>Billing address</h3>

                <div className={`${styles.formGroup} ${styles.names}`}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="firstName">First name *</label>
                    <input type="text" value={user.firstname} onChange={() => null} required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="lastName">Last name *</label>
                    <input type="text" value={user.lastname} onChange={() => null} required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      value={`${user.firstname}.${user.lastname}@gmail.com`.toLowerCase()}
                      onChange={() => null}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="address">Address *</label>
                    <input type="text" value={user.address} onChange={() => null} required />
                  </div>
                </div>
              </div>

              <div className={styles.payment}>
                <h3 className={styles.title}>Payement</h3>

                <div className={styles.card}>
                  <div className={styles.creditCardName}>
                    <label htmlFor="cc-name">Name on card</label>
                    <input type="text" value={`${user.firstname} ${user.lastname}`} onChange={() => null} required />
                    <small>Full name as displayed on card</small>
                  </div>

                  <div className={styles.creditCardNumber}>
                    <label htmlFor="cc-number">Credit card number</label>
                    <input type="text" value={user.creditCardNumber} onChange={() => null} required />
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.expiration}>
                    <label htmlFor="cc-expiration">Expiration</label>
                    <input type="text" value={user.creditCardExpiration} onChange={() => null} required />
                  </div>

                  <div className={styles.CCV}>
                    <label htmlFor="cc-expiration">CVV</label>
                    <input type="text" value={user.creditCardCVV} onChange={() => null} required />
                  </div>

                  <div className={styles.icons}>
                    <img src={Payement1} alt="Visa" />
                    <img src={Payement2} alt="Mastercard" />
                    <img src={Payement3} alt="Maestro" />
                    <img src={Payement5} alt="Paypal" />
                    <img src={Payement7} alt="Discover" />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.summaryRight}>
              <h3>Order summary</h3>

              <OrderSummary />

              <div className={styles.submit}>
                <Link to="/orderConfirmation">
                  <button>Buy</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
