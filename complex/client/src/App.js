import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";
import UsingRef from "./components/UsingRef";

function App() {
  return (
    <Router>
      <div className="App">
        <UsingRef />
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={OtherPage} />
          <Link to="/">Home</Link>
          <Link to="/otherpage">OtherPage</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
