import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/navBar/Navbar";
import LoginPage from "./pages/LoginPage";
import GlobalStyle from "./components/GlobalStyle";
import Products from "./pages/Products";
import Header from "./components/test/header";
import CustomDate from "./components/date/custom-date";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
