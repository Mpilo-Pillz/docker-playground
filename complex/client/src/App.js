import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";
import UsingRef from "./components/UsingRef";
import UsingRefForHTML from "./components/UsingRefForHTML";
import UseStatePage from "./components/UseStatePage";

function App() {
  return (
    <Router>
      <div className="App">
        <UsingRef />
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={OtherPage} />
          <Route exact path="/usestate" component={UseStatePage} />
          <Link to="/">Home</Link>
          <Link to="/otherpage">OtherPage</Link>
          <Link to="/usestate">UseState</Link>
        </div>
      </div>
      <UsingRefForHTML />
    </Router>
  );
}

export default App;
