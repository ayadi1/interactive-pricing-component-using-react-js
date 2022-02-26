import "./App.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import bgImageOne from "./images/bg-pattern.svg";
import bgImageTwo from './images/pattern-circles.svg'
function App() {
  return (
    <div className="App" style={{ background: `  url(${bgImageTwo})  , url(${bgImageOne}) ` }}>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for 30-day trail. No credit required</p>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
