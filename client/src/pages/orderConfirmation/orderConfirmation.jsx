import styles from "./orderConfirmation.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as SuccessIcon } from "../../assets/images/success.svg";

export function OrderConfirmation() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SuccessIcon />
        <h3>Order completed successfully</h3>
        <p>
          Thank you for ordering. We recieved your order and will begin precoessing it soon. Your order information appears below
        </p>

        <Link to="/">
          <button>Return to home</button>
        </Link>
      </div>
    </div>
  );
}
