import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/navBar/Navbar";
import GlobalStyle from "./components/GlobalStyle";

const App = () => {
  return (
    <BrowserRouter>
        <GlobalStyle/>
        <Navbar/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}


function Users() {
  return <h2>Users</h2>;
}