import React from "react";
import Header from "./components/Body";
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
