import React, { useState } from "react";
import Header from "./components/Header"
import Main from "./components/Main"
// import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Header></Header>
      <Main>Hi</Main>
      {/* <Footer>Hello</Footer> */}
    </div>
  );
}

export default App;
