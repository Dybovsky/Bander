import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import CentralHub from './components/CentralHub';
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
export default App;
