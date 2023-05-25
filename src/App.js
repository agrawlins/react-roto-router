import React, {useContext} from 'react' //Step 1
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; //Step 2
import Logo from './components/Images/logo.webp'
import Home from './components/Home.js' // Step 8
import About from './components/About.js' // Step 10
import Products from './components/Products.js' //NAV Example
import Checkout from './components/Services.js' //NAV Example
import ProductDetails from './components/ProductDetails.js' //Params 1
import ServiceDetails from './components/serviceDetails.js';
import Footer from './components/Footer';

const App = () => { // Step 3
    return ( // Step 4
        <Router> {/*Step 5*/}
            <nav className='header'> {/*Step 11*/}
                <Link to="/" className='link'> {/*Step 12*/}
                    <img src={Logo} className='logo'/>
                    
                </Link> {/*Step 12*/}
                <Link to="/about" className='link'> {/*Step 13*/}
                About
                </Link>{/*Step 13*/}
                <Link to="/products" className='link'> {/*Step 13*/}
                Products
                </Link>{/*Step 13*/}
                <Link to="/services" className='link'> {/*Step 13*/}
                Services
                </Link>{/*Step 13*/}
                <h1>Plunger Bros</h1>
            </nav> {/*Step 11*/}
            <Routes> {/*Step 6*/}
                <Route path ="/" element={<Home />} /> {/*Step 7*/}
                <Route path ="/about" element={<About />} /> {/*Step 9*/}
                <Route path ="/products" element={<Products />} /> {/*NAV Example*/}
                <Route path ="/services" element={<Checkout />} /> {/*NAV Example*/}
                <Route path ="/products/:productId" element={<ProductDetails />} /> {/*Params 2*/}
                <Route path ="/services/:serviceId" element={<ServiceDetails />} /> {/*Params 2*/} 
             </Routes> {/*Step 6*/}
             <Footer/>
        </Router> //Step 5
    ); //Step 4
  } //Step 3

export default App;