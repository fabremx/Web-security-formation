import { OrderSummary } from "../../components/orderSummary";
import { Link } from "react-router-dom";
import styles from "./payement.module.scss";

export function Payement() {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.address}>
          <div className={styles.form}>
            <h3 className={styles.title}>Billing address</h3>

            <div className={`${styles.formGroup} ${styles.names}`}>
              <div className={styles.inputGroup}>
                <label htmlFor="firstName">First name *</label>
                <input type="text" placeholder="" defaultValue="" required />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="lastName">Last name *</label>
                <input type="text" placeholder="" defaultValue="" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputGroup}>
                <label htmlFor="username">Username *</label>
                <input type="text" placeholder="" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address *</label>
                <input type="email" placeholder="" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputGroup}>
                <label htmlFor="address">Address *</label>
                <input type="text" placeholder="" required />
              </div>
            </div>
          </div>

          <div className={styles.payment}></div>
        </div>
        <div className={styles.order}>
          <h3 className={styles.title}>Your order</h3>

          <div className={styles.summary}>
            <OrderSummary />
          </div>

          <div className={styles.submit}>
            <Link to="orderConfirmation">
              <button>Buy</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
