import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Footer from "./components/Footer";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const apiKey = process.env.REACT_APP_GIF_API_KEY;
  const [progress, setProgress] = useState(0);
  const pageSize = 15;
  return (
    <>
      <Router>
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <div className="d-flex flex-column min-vh-100">
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
              <Home apiKey={apiKey} tag="smile" setProgress={setProgress} pageSize={pageSize} />
            </Route>
          </Switch>
        </div>
        <Footer className="mt-auto" />
      </Router>
    </>
  );
}

export default App;
