import React from 'react'
import { BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom' 
import About from '../About/About';
import Users from "../Users/Users"
import Home from "../Home/Home"
import "./NavBar.css"


function NavBar() {
  
    return (
      <Router>
        <div>
          <nav >
            <ul className='navbar'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }


export default NavBar