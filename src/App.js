import Home from "./pages/Home/Home";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import WebBrowsers from "./pages/WebBrowsers/WebBrowsers";
import OperatingSystems from "./pages/OperatingSystems/OperatingSystems";
import SearchEngines from "./pages/SearchEngines/SearchEngines";
import SecureMessaging from "./pages/SecureMessaging/SecureMessaging";

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/browsers" component={WebBrowsers} />
          <Route path="/os" component={OperatingSystems} />
          <Route path="/search-engines" component={SearchEngines} />
          <Route path="/secure-messaging" component={SecureMessaging} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
