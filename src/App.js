import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const apiKey = "bJLGRWEm5DVZ7jNwPSytEBX98MymJmt7";
  return (
    <>
      <Navbar />
      <Home apiKey={apiKey} />
    </>
  );
}

export default App;
