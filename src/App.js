import firebaseApp from "./firebase/firebase.config"; // need it to initialize firebase so the google authenctication will work
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import "./App.css";
import CentralHub from "./components/CentralHub";
import AuthProvider from "./context/auth";
import BarProfile from "./components/BarProfile";
import BanderNavbar from "./components/BanderNavbar";
import UserProfile from "./components/UserProfile";



const ContextApp = () => {
  return (
    <Router>
      <div className="Background">
        <BanderNavbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <CentralHub />
          </Route>
          <Route path="/artist_profile/:id">
            <UserProfile />
          </Route>
          <Route path="/bar_profile/:id">
            <BarProfile />
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
