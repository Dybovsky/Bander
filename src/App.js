import 'semantic-ui-css/semantic.min.css'
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import "./App.css";
import ArtistProfile from "./components/ArtistProfile";
import CentralHub from "./components/CentralHub";
import AuthProvider, { useAuth } from "./context/auth";
import BarProfile from "./components/BarProfile";
import Navbar from "./components/Navbar";

import Signup from "./pages/Signup";

const ContextApp = () => {
  const auth = useAuth();

  return (
    <Router>
      <div className="Background">
        <Navbar />
        <Switch>
          <Route path="/home">
            <CentralHub />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/artist_profile">
            <ArtistProfile />
          </Route>
          <Route path="/bar_profile">
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
