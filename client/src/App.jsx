import React from "react";
import { Home } from "./pages/home";
import "./assets/styles/global.scss";
import { Router, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Login } from "./pages/login";
import { Snackbar } from "./components/snackbar";
import { Register } from "./pages/register/register";

export function App({ history }) {
  return (
    <Router history={history}>
      <Header></Header>
      <Snackbar></Snackbar>

      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      <Footer></Footer>
    </Router>
  );
}
