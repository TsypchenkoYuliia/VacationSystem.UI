import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Requests from './pages/Requests';
import Reviews from './pages/Reviews';
import Approved from './pages/Approved';
import Rejected from './pages/Rejected';
import View from './pages/View';
import NewRequest from './pages/NewRequest';
import Header from './components/Header';

const access_token = localStorage.getItem('access_token');
const userId = localStorage.getItem('userId');
const role = localStorage.getItem('role');
const firstname = localStorage.getItem('firstname');
const lastname = localStorage.getItem('lastname');

function App() {

  return (
    <div className='wrapper'>
      <Header/>
      <BrowserRouter>
      <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/newRequest" exact>
              <NewRequest />
            </Route>
            <Route path="/requests" exact>
              <Requests />
            </Route>
            <Route path="/reviews" exact>
              <Reviews />
            </Route>
            <Route path="/approved" exact>
              <Approved />
            </Route>
            <Route path="/rejected" exact>
              <Rejected />
            </Route>
            <Route path="/view" exact>
              <View />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="*" exact>
            <Redirect to="/login" />
          </Route> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
