import { useState, useEffect } from "react";
import styles from "./cart.module.scss";
import { ReactComponent as RemoveIcon } from "../../assets/images/remove.svg";
import { Link, useHistory } from "react-router-dom";
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
  const [cookies, setCookie, removeCookie] = useCookies(["cart"]);
  const history = useHistory();

  useEffect(() => {
    getUserInfo();
    getCartProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserInfo = async () => {
    const cartId = window.location.pathname.split("/").pop();

    try {
      const response = await fetch(`http://localhost:3000/user/${cartId}`, {
        method: "GET",
        credentials: "include",
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
    if (!cookies.cart) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/products/${cookies.cart}`, {
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

  const removeProduct = (idToRemove) => {
    const idsArray = cookies.cart.split(",");
    const filteredIds = idsArray.filter((id) => id !== idToRemove.toString());
    const newProducts = products.filter((product) => product._id !== idToRemove);

    updateCartCookie(filteredIds);
    setProducts(newProducts);
  };

  const updateCartCookie = (filteredIds) => {
    if (!filteredIds.length) {
      removeCookie("cart", { path: "/" });
      return;
    }

    const ids = filteredIds.join(",");
    setCookie("cart", ids, { path: "/" });
  };

  const getProductQuantity = (id) => {
    if (!cookies.cart) return 0;

    return cookies.cart.split(",").reduce((acc, current) => {
      if (current === id.toString()) return (acc += 1);
      return acc;
    }, 0);
  };

  const calculTotalProductsPrice = () => {
    return products.reduce((acc, current) => {
      return (acc += getProductQuantity(current._id) * current.price);
    }, 0);
  };

  const calculTotal = () => {
    const productsPrice = calculTotalProductsPrice();

    if (productsPrice <= 0) {
      return 0;
    }

    return productsPrice - 40 - 10 + 2;
  };

  const sendOrder = async () => {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    try {
      const response = await fetch("http://localhost:3000/order", {
        method: "POST",
        credentials: "include",
        headers,
        body: JSON.stringify({
          products,
          user,
          date: Date.now(),
          total: calculTotal(),
        }),
      });

      if (response.status !== 200) {
        Snackbar.show("Order failed !", "error");
        return;
      }

      removeCookie("cart", { path: "/" });
      Snackbar.show("Order successfully sent !", "success");
      history.push("/orderConfirmation");
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
                <tr key={product._id}>
                  <td className={styles.photo}>
                    <Link to={`/product/${product._id}`}>
                      <img src={product.image} alt="product" />
                    </Link>
                  </td>
                  <td className={styles.name}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                  </td>
                  <td className={styles.price}>
                    <p>$ {product.price}</p>
                  </td>
                  <td className={styles.quantity}>
                    <input type="number" size="4" defaultValue={getProductQuantity(product._id)} min="0" step="1" disabled />
                  </td>
                  <td className={styles.total}>
                    <p>$ {product.price}</p>
                  </td>
                  <td className={styles.remove}>
                    <RemoveIcon onClick={() => removeProduct(product._id)} />
                  </td>
                </tr>
              ))}
              {products.length === 0 && <p className={styles.noProducts}>No products in cart</p>}
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

              <>
                <div className={styles.element}>
                  <h4>Sub Total</h4>
                  <div> $ {calculTotalProductsPrice().toFixed(2)} </div>
                </div>
                {products.length > 0 && (
                  <>
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
                  </>
                )}
                <hr />
                <div className={`${styles.element} ${styles.total}`}>
                  <h5>Total</h5>
                  <div> $ {calculTotal().toFixed(2)} </div>
                </div>
                <hr />
              </>

              <div className={styles.submit}>{products.length > 0 && <button onClick={sendOrder}>Buy</button>}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
