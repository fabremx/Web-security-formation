import { useState, useEffect } from "react";
import styles from "./profile.module.scss";
import avatar from "../../assets/images/avatar.png";
import { Divider } from "antd";
import { Snackbar } from "../../components/snackbar";
import { Link, useHistory } from "react-router-dom";

export function Profile() {
  const [user, setUser] = useState(undefined);
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getUser();
    getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "GET",
        credentials: "include",
      });

      if (response.status === 401) {
        Snackbar.show("Unauthorized !", "error");
        history.push("/");
        return;
      } else if (response.status !== 200) {
        Snackbar.show("Registration failed !", "error");
        return;
      }

      const result = await response.json();
      setUser(result.user);
    } catch (error) {
      Snackbar.show("Something went wrong", "error");
    }
  };

  const getOrders = async () => {
    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "GET",
        credentials: "include",
      });

      if (response.status === 401) {
        Snackbar.show("Unauthorized !", "error");
        history.push("/");
        return;
      } else if (response.status !== 200) {
        Snackbar.show("Order(s) fetch failed !", "error");
        return;
      }

      const result = await response.json();
      setOrders(result.orders);
    } catch (error) {
      Snackbar.show("Something went wrong", "error");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Profile</h2>

        {user && (
          <div className={styles.card}>
            <div className={styles.avatar}>
              <img src={avatar} alt="Generic avatar" />
            </div>
            <div className={styles.info}>
              <p>
                <span className={styles.key}>Firstname:</span> {user.firstname}
              </p>
              <p>
                <span className={styles.key}>Lastname:</span> {user.lastname}
              </p>
              <p>
                <span className={styles.key}>Address:</span> {user.address}
              </p>
            </div>
          </div>
        )}

        <h5>Last orders</h5>
        <Divider orientation="left" style={{ margin: "0 0 15px" }}></Divider>

        {orders &&
          orders.map((order, index) => (
            <div className={styles.order}>
              <table>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Date</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Address</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <td className={styles.date}>
                    <p>
                      <strong>#{index + 1}</strong>
                    </p>
                  </td>
                  <td className={styles.date}>
                    <p>{new Date(order.date).toISOString().split("T")[0]}</p>
                  </td>
                  <td className={styles.firstname}>
                    <p>{order.user.firstname}</p>
                  </td>
                  <td className={styles.lastname}>
                    <p>{order.user.lastname}</p>
                  </td>
                  <td className={styles.address}>
                    <p>{order.user.address}</p>
                  </td>
                  <td className={styles.total}>
                    <p>$ {order.total}</p>
                  </td>
                </tbody>
              </table>

              <table className={styles.products}>
                <thead>
                  <tr>
                    <th colspan="2">Products</th>
                  </tr>
                </thead>
                {order.products.map((product) => (
                  <tbody>
                    <td className={styles.photo}>
                      <Link to={`/product/${product._id}`}>
                        <img src={product.image} alt="product" />
                      </Link>
                    </td>
                    <td>
                      <p>{product.title}</p>
                    </td>
                  </tbody>
                ))}
              </table>
            </div>
          ))}

        {orders.length === 0 && <p>No orders</p>}
      </div>
    </div>
  );
}
