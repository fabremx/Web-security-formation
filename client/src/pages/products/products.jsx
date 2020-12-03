import styles from "./products.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";

export function Products() {
  return (
    <div className={styles.container}>
      <div class={styles.content}>
        <form action="#" className={styles.search}>
          <input class="form-control" placeholder="Search here..." type="text" />
          <button type="submit">
            {" "}
            <SearchIcon />{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
