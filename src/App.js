import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import {Signup, Signin, Welcome, Home, Navbar, Profile, Users} from './views'
import {ProtectedRoute} from './components'

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/signup" />} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Signin} />
          <Route path="/welcome" component={ProtectedRoute(Welcome)} />
          <Route path="/home" component={ProtectedRoute(Home)} />
          <Route exact path="/user/profile" component={ProtectedRoute(Profile)} />
          <Route exact path="/users" component={ProtectedRoute(Users)} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
