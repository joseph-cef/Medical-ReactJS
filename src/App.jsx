import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Doctors } from "./components/Doctors";
import { Services } from "./components/Services";
import { Blogs } from "./components/Blogs";

function App() {
  return (
    <>
      <Navbar />
      
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="doctors">
          <Doctors />
        </div>

        <div id="blogs">
          <Blogs />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
