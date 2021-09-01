import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Learn from "./pages/Learn/Learn";

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/os" component={About} />
          <Route path="/search-engines" component={Learn} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
