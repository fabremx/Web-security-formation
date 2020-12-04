import React from "react";
import { Home } from "./pages/home";
import "./assets/styles/global.scss";
import { Router, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Login } from "./pages/login";
import { Snackbar } from "./components/snackbar";
import { Register } from "./pages/register/register";
import { Contact } from "./pages/contact/contact";
import { Products } from "./pages/products";
import { Product } from "./pages/product";
import { Cart } from "./pages/cart";
import { Admin } from "./pages/admin";

export function App({ history }) {
  return (
    <Router history={history}>
      <Header></Header>
      <Snackbar></Snackbar>

      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/product/:id" component={Product} />
      <Route exact path="/cart/:id" component={Cart} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/admin" component={Admin} />

      <Footer></Footer>
    </Router>
  );
}
