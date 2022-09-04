import React, {useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Create from './pages/Create'


import authContext from './context/AuthContext'

const App = () => {
  const [user, setUser] = useState(false)

  return (
    <>
    <authContext.Provider value={{user, setUser}}>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/create">
        <Create />
      </Route>
      <Route exact path="/blog/:title">
        <Blog />
      </Route>
      <Route path="/login">
        <Login  />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
    </authContext.Provider>
    </>
  )
}

export default App