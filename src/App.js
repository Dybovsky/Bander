import "semantic-ui-css/semantic.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import "./App.css";
import ArtistProfile from "./components/ArtistProfile";
import CentralHub from "./components/CentralHub";
import AuthProvider from "./context/auth";
import BarProfile from "./components/BarProfile";
import BanderNavbar from "./components/BanderNavbar";
import BasicSearch from "./components/BasicSearch";

const ContextApp = () => {

  return (
    <Router>
      <div className="Background">
        <BanderNavbar />
        <Switch>
          <Route path="/home">
            <CentralHub />
          </Route>
          <Route path="/event_search">
            <BasicSearch />
          </Route>
          <Route path="/artist_profile/:id">
            <ArtistProfile />
          </Route>
          <Route path="/bar_profile/:id">
            <BarProfile />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <ContextApp />
    </AuthProvider>
  );
}
export default App;
