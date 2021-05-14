import './App.css';
import Login from "./components/Login";
import Header from "./components/Header.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
              <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
