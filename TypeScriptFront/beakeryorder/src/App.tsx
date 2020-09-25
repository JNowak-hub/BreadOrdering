import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/navBar/Navbar";
import LoginPage from "./pages/LoginPage";
import GlobalStyle from "./components/GlobalStyle";
import Products from "./pages/Products";
import { BackgroundImageWrapper } from "./components/styles/backgroundImageWrapper";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <BackgroundImageWrapper>
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
      </BackgroundImageWrapper>
    </BrowserRouter>
  );
};

export default App;

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
