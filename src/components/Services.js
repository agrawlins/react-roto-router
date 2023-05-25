import React from 'react' 
import {useNavigate, Link} from 'react-router-dom'; // p5 import Link
import serviceData from "./serviceData" //params 1

const Services = () => {

    const navigate = useNavigate() 
    
    const services = serviceData.map(service => (// params 2
      <h3 key={service._id}>  {/* params 3 */}
          <Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}  {/* params 4 */}
      </h3> /* params 3 */
  )) /* params 2 */
    return (
      <div className='main'>

        <p>Whether it's a leaky toilet or a loose pipe, we're here to satisfy all your plumbing needs! Below are all the available services we can offer you!</p>

             <button onClick={()=> navigate("/products")}>Products</button>
             <button onClick={()=> navigate("/")}>Home</button>
              
             <div>
              <h1>Services</h1>
              {services}
            </div>
      </div>
    );
  }

export default Services;