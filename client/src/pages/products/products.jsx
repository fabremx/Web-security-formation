import { useState, useEffect } from "react";
import styles from "./products.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import { Snackbar } from "../../components/snackbar";
import "./products.scss";

export function Products() {
  const [search, setSearch] = useState("");
  const [searchTemplate, setSearchTemplate] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const goToProduct = (id) => {
    window.location.href = `product/${id}`;
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
    const url = search ? `http://localhost:3000/products?search=${search}` : "http://localhost:3000/products";

    try {
      const response = await fetch(url, {
        method: "GET",
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
