import React from "react";
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="bg-[#FAF9F4] h-full w-[375px] relative flex flex-col ">
     <Header/>
     <Body/>
     <Footer/>
    </div>
  );
}

export default App;
