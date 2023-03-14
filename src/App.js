import "./App.css";
import React from "react";

import Banner from "./components/Banner";
import Header from "./components/Header";
import ApiData from "./components/ApiData";

function App() {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <ApiData />
      </div>
    </>
  );
}

export default App;
