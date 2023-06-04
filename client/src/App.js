import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Admin from './components/pages/Admin';
import ContactUs from './components/pages/ContectUs';
import About from './components/pages/About'
import Footer from './components/Footer';
function App() {
  return (
      <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' exact={true}  element={<Home />} />
            <Route path='/services' exact={true}  element={<Services />} />
            <Route path='/products' exact={true}  element={<Products />} />
            <Route path='/sign-up' exact={true}  element={<SignUp />} />
            <Route path='/admin' exact={true}  element={<Admin />} />
            <Route path='/contactus' exact={true}  element={<ContactUs />} />
            <Route path='/about' exact={true}  element={<About/>} />
          </Routes>
          <Footer/>

        </Router>
      </>
  );
}

export default App;
