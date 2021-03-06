import { useState, useEffect } from "react";
import styles from "./products.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import { Snackbar } from "../../components/snackbar";
import { useHistory } from "react-router-dom";
import "./products.scss";

export function Products() {
  const [search, setSearch] = useState("");
  const [searchTemplate, setSearchTemplate] = useState("");
  const history = useHistory();

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToProduct = (id) => {
    history.push(`product/${id}`);
  };

  const setOnclick = () => {
    const products = document.getElementsByClassName("product");

    for (let product of products) {
      const id = product.getAttribute("data-id");
      product.onclick = () => goToProduct(id);
    }
  };

  const submitSearch = (event) => {
    event.preventDefault();
    getProducts();
  };

  const getProducts = async () => {
    const url = search ? `http://localhost:3000/products/search?q=${search}` : "http://localhost:3000/products";

    var headers = new Headers();
    headers.append("Access-Control-Allow-Credentials", true);

    try {
      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      const template = await response.text();
      setSearchTemplate(template);
    } catch (error) {
      Snackbar.show("Something went wrong", "error");
    }

    setOnclick();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form className={styles.search} onSubmit={submitSearch}>
          <input placeholder="Search here..." value={search} onChange={(e) => setSearch(e.target.value)} type="text" />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>

        {searchTemplate && <div dangerouslySetInnerHTML={{ __html: searchTemplate }} />}
      </div>
    </div>
  );
}
