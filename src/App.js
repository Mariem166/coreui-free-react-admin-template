import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import User from './views/pages/User/User'
 

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Users = React.lazy(() => import('./views/pages/Users/Users'))
const Page500 = React.lazy(() => import('./views/pages/User/User'))
const NewUser= React.lazy(() => import('./views/pages/NewUser/NewUser'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/Users" name="Users" element={<Users />} />
            <Route exact path="/User/:id" name="User " element={<User/>} />
            <Route exact path="/NewUser" name="Users" element={<NewUser />} />
          
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
