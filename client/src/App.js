import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

/////////////imports from components

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Login from "./components/Login/Login"
import Regitration from "./components/Registration/Regitration"
import Product from "./components/Products/Product"
/////////////imports from react-router-dom

import {Routes , Route} from 'react-router-dom';




function App() {

  ////////////context API

  
  return (
   <>

  <Navbar />
       <Routes>
  <Route exact path="/" element={<Home />}/>
  <Route exact path="/about" element={<About />}/>
  <Route exact path="/contact" element={<Contact />}/>
  <Route exact path="/products" element={<Product />}/>
  <Route exact path="/login" element={<Login />}/>
  <Route exact path="/register" element={<Regitration />}/>
</Routes>
    
   </>
  );
}

export default App;
