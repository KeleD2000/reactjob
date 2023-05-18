import "./App.css";
import WaveAnimation from "./WaveAnimation";
import Footer from "./Footer";
import Card from "./Card";

function App() {
  return (
    <>
      <header>
        <div>
          <WaveAnimation />
        </div>
      </header>
      <br></br>
        <div>
          <Card />
        </div>
      <Footer />
    </>
  );
}

export default App;
