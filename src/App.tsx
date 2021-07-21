import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import { Route } from "react-router";
import './App.css';
import LoginComponent from './components/login/login.component';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/login"}>
              Auth Service
            </Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div style={{ paddingTop: "60px" }}>
          <Switch>
            <Route exact path="/" component={LoginComponent} />

            <Route path="/login" component={LoginComponent} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
