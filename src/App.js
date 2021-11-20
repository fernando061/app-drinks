import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import NavBarTop from "./components/NavBarTop";
import Routes from "./Routes";
import CarritoContextProvider from "./context/CarritoContext";

function App() {
  return (
    <Router>
      <CarritoContextProvider>
        <NavBarTop/>
        <Switch>
            <Routes/>
        </Switch>
      </CarritoContextProvider>
    </Router>
  );
}

export default App;
