import React from "react";
import { hot } from "react-hot-loader/root";
import Accordion from "./components/accordion";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      {/* <Accordion/> */}
      <Navbar />
    </div>
  );
}

export default hot(App);
