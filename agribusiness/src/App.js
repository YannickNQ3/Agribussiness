import React from 'react'
import Navbar from './common/Navbar';
import Home from './pages/Home/Home';
import { Route, Routes} from "react-router-dom";
import ShopStore from './pages/Store/ShopStore';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './common/Login';
import Register from './common/Register';
import Footer from './common/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Inicio' element={<Home />}></Route>
        <Route path='Nosotros' element={<About />}></Route>
        <Route path='Servicios' element={<Services />}></Route>
        <Route path='Tienda' element={<ShopStore />}></Route>
        <Route path='Contacto' element={<Contact />}></Route>
        <Route path='Login' element={<Login />}></Route>
        <Route path='Register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;

