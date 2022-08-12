import React from 'react' //Step 1
import {useNavigate} from 'react-router-dom'; 

const About = () => {
  
  const navigate = useNavigate() 

  return (
      <div className='main'>
        <h2>About Us</h2>
        
        <p>We are the Plunger Bros; a team of professionals who actually care about your crap! From intricate plumbing jobs to simple wax seals, we stand ready and available to satisfy all your plumbing needs. <br/> We opened our doors in 2022 with one goal in mind: help people deal with all the crap in their lives!
        </p>

            <button onClick={()=> navigate("/")}>Home</button> 
            <button onClick={()=> navigate("/products")}>Products</button> {/*NAV - Step 3*/}
            <button onClick={()=> navigate("/services")}>Services</button> {/*NAV - Step 3*/}
      </div>
    );
  }

export default About;