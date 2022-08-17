import React from "react";
import { Fragment } from "react";
import Header from "./components/Header";
import Gym from "./components/sections/Gym"
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="background">
      <Header />
      <Gym />
      </div>
    </Fragment>
  );
}

export default App;
