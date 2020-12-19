import { Snackbar } from "../components/snackbar";
import { handleError } from "./handleErrors";

const getOrders = async (file) => {
  try {
    const response = await fetch("http://localhost:3000/orders", {
      method: "GET",
      credentials: "include",
    });

    if (response.status !== 200) {
      handleError(response, "Order(s) fetch failed !");
      return { ok: false };
    }

    const result = await response.json();
    return { ok: true, orders: result.orders };
  } catch (error) {
    Snackbar.show("Something went wrong", "error");
  }
};

const ordersApi = {
  getOrders,
};

export default ordersApi;
