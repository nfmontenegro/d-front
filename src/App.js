import React from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

import {Signup, Signin, Welcome, Home, Navbar, Profile, Users, EditProfile} from "./views"
import {ProtectedRoute} from "./components"

function App() {
  const auth = localStorage.getItem("token")
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" render={() => (auth ? <Redirect to="/home" /> : <Redirect to="/signup" />)} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Signin} />
          <Route path="/welcome" component={ProtectedRoute(Welcome)} />
          <Route path="/home" component={ProtectedRoute(Home)} />
          <Route exact path="/user/profile" component={ProtectedRoute(Profile)} />
          <Route exact path="/user/profile/:id" component={ProtectedRoute(EditProfile)} />
          <Route exact path="/users" component={ProtectedRoute(Users)} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
