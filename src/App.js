import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import BasicSearch from './components/BasicSearch';
import CentralHub from './components/CentralHub';
import AdvancedSearch from './components/AdvancedSearch';
import Navbar from './components/Navbar';
import AuthProvider, { useAuth } from './context/auth';

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
              <Route path="/search/basic">
              <BasicSearch />
              </Route>
              <Route path="/search/advanced">
              <AdvancedSearch />
              </Route>
              <Route path="/">
              <Redirect to="/home" />
              </Route>
            </Switch>
          </div>
       </Router>
      )
  }


function App() {
  return(
    <AuthProvider>
      <ContextApp />
    </AuthProvider>
  );
}

export default App;
