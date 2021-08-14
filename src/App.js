import Home from "./pages/Home/Home";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./pages/About/About";

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
