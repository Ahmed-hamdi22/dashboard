import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Dashboard from './component/Dashboard'
// import Header from './component/Header'
import Home from './component/Home'
import Updateuser from './Updateuser'
import User from './component/User'
import Login from './Login'
import Signup from './Signup'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/'element={ <Home/>}/>
        <Route path='/register'element={ <Signup/>}/>
        <Route path='/login'element={ <Login/>}/>
        <Route path='/dashboard'element={ <Dashboard/>}>
        <Route path='user'element={ <User/>}/>
        <Route path='user/:id' element={<Updateuser/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App