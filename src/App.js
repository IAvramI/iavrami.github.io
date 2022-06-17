import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes";
import Navigation from "./components/navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routing />
      </div>
    </Router>
  );
}

export default App;
