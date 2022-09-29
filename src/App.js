import React from "react";
import { hot } from "react-hot-loader/root";
import Accordion from "./components/accordion";
import Navbar from "./components/navbar";
import Tabs from "./components/tabs";

function App() {
  return (
    <div className="App">
      <Accordion />
      <Navbar />
      <Tabs />
    </div>
  );
}

export default hot(App);
