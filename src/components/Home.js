import React from 'react' //Step 1
import {useNavigate} from 'react-router-dom'; //Step 2 NAV - Step 2

const Home = () => { //Step 2
  const navigate = useNavigate() // NAV Step 1 
  
  return (//Step 3
      
      <div className='main'> {/*Step 4*/}
          <h2>Plunger Bros</h2>{/*Step 5*/}
        { <p>Welcome to our site! Odds are; if you're here, you've sprung a leak! Or, maybe you're looking to prevent leaks, or install new fittings? Either way, welcome, and feel free to browse our many products and services!</p> } {/*Step 6*/}
        <button onClick={()=> navigate("/products")}>Products</button> {/*NAV - Step 3*/}
        <button onClick={()=> navigate("/services")}>Services</button> {/*NAV - Step 3*/}
      </div> //Step 4
    );// Step 3
  }// Step 2

export default Home;