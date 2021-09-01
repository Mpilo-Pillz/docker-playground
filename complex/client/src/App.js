import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";
import UsingRef from "./components/UsingRef";
import UseEffectPage from "./components/UseEffectPage";
import UseStatePage from "./components/UseStatePage";
import UseMemoPage from "./components/UseMemoPage";
import UseCallBackPage from "./components/UseCallBackPage";
import FunctionalContextComponent from "./components/FunctionContextComponent";
import ClassContextComponent from "./components/ClassContextComponent";
import { createContext, useState } from "react";
import UseReducerPage from "./components/UseReducerPage";
import UseReducerPageComplex from "./components/UseReducerPageComplex";
import ToDoPage from "./components/todo/ToDoPage";

export const ThemeContext = createContext();
function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionalContextComponent />
      <ClassContextComponent />
      <Router>
        <div className="App">
          <div>
            <Route exact path="/" component={Fib} />
            <Route exact path="/otherpage" component={OtherPage} />
            <Route exact path="/usestate" component={UseStatePage} />
            <Route exact path="/useref" component={UsingRef} />
            <Route exact path="/useeffect" component={UseEffectPage} />
            <Route exact path="/usememo" component={UseMemoPage} />
            <Route exact path="/usereducer" component={UseReducerPage} />
            <Route exact path="/todo" component={ToDoPage} />
            <Route exact path="/useCallback" component={UseCallBackPage} />
            <Route
              exact
              path="/usereducercomplex"
              component={UseReducerPageComplex}
            />
            <Link to="/">Home</Link> | <Link to="/otherpage">OtherPage</Link>|
            <Link to="/usestate">UseState</Link>|{" "}
            <Link to="/useref">Use Ref</Link> |
            <Link to="/useeffect">Use Effect</Link> |
            <Link to="/usememo">Use Memo</Link> |
            <Link to="/usereducer">Use Reducer</Link> |
            <Link to="/usereducercomplex">Use Reducer Complex</Link> |
            <Link to="/todo">To Do Page</Link> |
            <Link to="/useCallback">Use call back</Link> |
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
