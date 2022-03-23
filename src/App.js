import React from "react";
import Content from "./components/contents/Content";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";



function App(){
  return (
    <div >
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
export default App;