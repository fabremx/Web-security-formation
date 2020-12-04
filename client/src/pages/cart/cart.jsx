import styles from "./cart.module.scss";
import Product1 from "../../assets/images/product-01.jpg";
import { ReactComponent as RemoveIcon } from "../../assets/images/remove.svg";
import { Link } from "react-router-dom";

export function Cart() {
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
              <tr>
                <td className={styles.photo}>
                  <Link to="/product/id">
                    <img src={Product1} alt="product" />
                  </Link>
                </td>
                <td className={styles.name}>
                  <Link to="/product/id">Lorem ipsum dolor sit amet</Link>
                </td>
                <td className={styles.price}>
                  <p>$ 80.0</p>
                </td>
                <td className={styles.quantity}>
                  <input type="number" size="4" value="1" min="0" step="1" />
                </td>
                <td className={styles.total}>
                  <p>$ 80.0</p>
                </td>
                <td className={styles.remove}>
                  <RemoveIcon />
                </td>
              </tr>
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

        <div className={styles.resume}>
          <div className={styles.summary}>
            <h3>Order summary</h3>
            <div className={styles.element}>
              <h4>Sub Total</h4>
              <div> $ 130 </div>
            </div>
            <div className={styles.element}>
              <h4>Discount</h4>
              <div> $ 40 </div>
            </div>
            <hr />
            <div className={styles.element}>
              <h4>Coupon Discount</h4>
              <div> $ 10 </div>
            </div>
            <div className={styles.element}>
              <h4>Tax</h4>
              <div> $ 2 </div>
            </div>
            <div className={styles.element}>
              <h4>Shipping Cost</h4>
              <div> Free </div>
            </div>
            <hr />
            <div className={`${styles.element} ${styles.total}`}>
              <h5>Total</h5>
              <div> $ 388 </div>
            </div>
            <hr />
          </div>
        </div>

        <div class={styles.submit}>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}
