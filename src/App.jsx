import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Alertsection from "./Components/Alertsection/Alertsection";
import Firstsection from "./Components/Firstsection/Firstsection";
import Secondsection from "./Components/Secondsection/Secondsection";
import Thirdsection from "./Components/Thirdsection/Thirdsection";
import Fourthsection from "./Components/Fourthsection/Fourthsection";
import Fifthsection from "./Components/Fifthsection/Fifthsection";
import SixthSection from "./Components/SixthSection/SixthSection";

function App() {
  return (
    <>
      <Header />
      <Alertsection />
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Fourthsection/>
      <Fifthsection/>
      <SixthSection/>
      <Footer />
    </>
  );
}

export default App;
