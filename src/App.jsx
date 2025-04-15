import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import FoodMenu from './FoodMenu'
import Abouts from './Abouts'
import Reviewer from './Reviewer'
import Contact from './Contact'
import Gallerys from './Gallerys'
import Cart from './Cart'
import Login from './Login'
import Signup from './Signup'
import { AuthProvider } from './AuthContext'
import MyAccount from './MyAccount'

 const App = () => {
  return (
    <>
     <AuthProvider>
   <Routes>
    <Route path='/' element={<Layout />} />
    {/* <Route index element={<Hero />} /> */}
    <Route path='/Gallery' element={<Gallerys />} />
    <Route path='/Review' element={<Reviewer />} />
    <Route path='/Foodmenu' element={<FoodMenu />} />
    <Route path='/About' element={<Abouts />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='/Cart' element={<Cart />} />
    <Route path='/Login' element={<Login />} />
    <Route path='/Signup' element={<Signup />} />
    <Route path='/MyAccount' element={<MyAccount />} />
   </Routes>
   </AuthProvider>
   </>
  )
}
export default App;
