import React from "react";
import { Home } from "./pages/home";
import "./assets/styles/global.scss";
import { Router, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Snackbar } from "./components/snackbar";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Contact } from "./pages/contact";
import { Products } from "./pages/products";
import { Product } from "./pages/product";
import { Cart } from "./pages/cart";
import { Admin } from "./pages/admin";
import { About } from "./pages/about";
import { OrderConfirmation } from "./pages/orderConfirmation";
import { Payement } from "./pages/payement";

export function App({ history }) {
  return (
    <Router history={history}>
      <Header></Header>
      <Snackbar></Snackbar>

      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/product/:id" component={Product} />
      <Route exact path="/cart/:id" component={Cart} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/payement" component={Payement} />
      <Route exact path="/orderConfirmation" component={OrderConfirmation} />

      <Footer></Footer>
    </Router>
  );
}
