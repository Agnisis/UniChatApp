import React from "react"

import { BrowserRouter as Router,Route } from "react-router-dom"

import { AuthProvider } from "../components/contexts/AuthContext"

import Chats from "./Chats"
import Login from "./Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider> 
          <Route>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} /> 
          </Route>
        </AuthProvider> 
      </Router>
    </div>
  )
}

export default App
