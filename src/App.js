import React from 'react'
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import darkStyles from './styles/dark.module.css'
import lightStyles from './styles/light.module.css'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import CountryDetailsPage from './pages/CountryDetailsPage'
import { useSelector } from 'react-redux'
import './styles/index.css'

const App = () => {
  const {mode} = useSelector(state => state.status)
  return (
    <div className={`${mode === 'light'? lightStyles.body: darkStyles.body} container`}>
      
      <Router>
        <Navbar />
        <Switch>
           <Route path={'/'} exact>
              <LandingPage />
           </Route>
           <Route path={'/country/:code'}>
              <CountryDetailsPage />
           </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

