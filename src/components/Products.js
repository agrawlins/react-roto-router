import React from 'react' 
import {useNavigate, Link} from 'react-router-dom'; // p5 import Link
import productData from "./productData" //params 1

const Products = () => {

    const navigate = useNavigate() 
    
    const products = productData.map(product => (// params 2
      <h3 key={product._id}>  {/* params 3 */}
          <Link to={`/products/${product._id}`}>{product.name}</Link> - ${product.price}  {/* params 4 */}
      </h3> /* params 3 */
  )) /* params 2 */
    return (
      <div className='main'>

        <p>Whether you need a brand new toilet, or a simple wax seal for an existing one, we've got you covered! Check out the many products we offer for sale at our store today!</p>

             <button onClick={()=> navigate("/services")}>Services</button>
             <button onClick={()=> navigate("/")}>Home</button> 
              
             <div>
              <h1>Products</h1>
              {products}
            </div>
      </div>
    );
  }

export default Products;