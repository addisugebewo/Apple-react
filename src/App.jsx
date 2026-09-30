import "./App.css";
import Alertsection from "./Components/Alertsection/Alertsection";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import FirstSection from "./Components/Firstsection/Firstsection";
import SecondSection from "./Components/Secondsection/Secondsection";
import Thirdsection from "./Components/Thirdsection/Thirdsection";
import Fourthsection from "./Components/Fourthsection/Fourthsection";
import Fifthsection from "./Components/Fifthsection/Fifthsection";
import SixthSection from "./Components/SixthSection/SixthSection";

function App() {
  return (
    <>
      <Header />
      <Alertsection />
      <FirstSection />
      <SecondSection />
      <Thirdsection />
      <Fourthsection />
      <Fifthsection />
      <SixthSection />
      <Footer />
    </>
  );
}

export default App;
