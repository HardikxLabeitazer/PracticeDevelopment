import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom'
import ShopConnector from './shop/ShopConnector'

export class App extends Component {
  render() {
    return <Provider>
      <Router>
        <Routes>
          <Route exact path="/shop" Component={ShopConnector}/>
          <Navigate to="/shop"/>
        </Routes>
      </Router>
    </Provider>
  }
}

export default App