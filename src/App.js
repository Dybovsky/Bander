import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import "./App.css";
import ArtistProfile from "./components/ArtistProfile";
import CentralHub from "./components/CentralHub";
import Navbar from "./components/Navbar";
import AuthProvider, { useAuth } from "./context/auth";
import VenuePage from "./components/VenuePage";
import ArtistPage from "./components/ArtistPage";
import BarProfile from "./components/BarProfile";

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
          <Route path="/signup/:userId/venue">
            <VenuePage />
          </Route>
          <Route path="/signup/:userId/artist">
            <ArtistPage />
          </Route>
          <Route path="/artist_profile">
            <ArtistProfile />
          </Route>
          {/* <Route path="/bar_profile">
            <BarProfile />
          </Route> */}
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
