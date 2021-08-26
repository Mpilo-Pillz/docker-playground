import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";
import UsingRef from "./components/UsingRef";
import UseEffectPage from "./components/UseEffectPage";
import UseStatePage from "./components/UseStatePage";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={OtherPage} />
          <Route exact path="/usestate" component={UseStatePage} />
          <Route exact path="/useref" component={UsingRef} />
          <Route exact path="/useeffect" component={UseEffectPage} />
          <Link to="/">Home</Link> | <Link to="/otherpage">OtherPage</Link>|
          <Link to="/usestate">UseState</Link>|{" "}
          <Link to="/useref">Use Ref</Link> |
          <Link to="/useeffect">Use Effect</Link> |
        </div>
      </div>
    </Router>
  );
}

export default App;
