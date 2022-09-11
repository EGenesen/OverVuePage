import { Hero, Body, Footer } from "../containers";
import { Navbar } from '../components';
import "../styles/styles.css";

function Homepage() {
    return (
      <div id="App">
        <Navbar />
        <Hero />
            <Body />
        {/* <Footer /> */}
      </div>
    );
  }
