import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Help from "./components/Help";

function App() {
  const apiKey = process.env.REACT_APP_GIF_API_KEY;
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home apiKey={apiKey} tag="smile" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
