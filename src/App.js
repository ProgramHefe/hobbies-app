import React from "react";
import { Fragment } from "react";
import Header from "./components/Header";
import Gym from "./components/sections/Gym"
import Cycling from "./components/sections/Cycling";
import Tennis from "./components/sections/Tennis";
import VideoGames from "./components/sections/VideoGames"
import './App.css';

function App() {

  return (
    <div className="background">
    <Fragment>
      <Header />
      <Gym  />
      <Cycling />
      <Tennis />
      <VideoGames />
    </Fragment>
    </div>
  );
}

export default App;
