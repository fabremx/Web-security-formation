import styles from "./orderSummary.module.scss";

export function OrderSummary() {
  return (
    <>
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
    </>
  );
}
