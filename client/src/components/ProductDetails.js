import React from "react"
import { useNavigate, Link, useParams } from "react-router-dom" //params 1
import productData from "./productData" //params 3

const ProductDetails = () => {//had props in parameter
    const navigate = useNavigate() 
    const {productId} = useParams()//params 2
    const foundProduct = productData.find(product => product._id === productId)//params 4
    
    //console.log(useParams())
    //console.log(foundProduct)
    //console.log(productId)
    
    return (
        
        <div className='main'>
            <h1>{foundProduct.name}</h1> {/**params 5 */}
            <h3>{foundProduct.name} - ${foundProduct.price}</h3> {/**params 5 */}
            <p>{foundProduct.description}</p> {/**params 5 */}
            <button onClick={()=> navigate("/products")}>Back</button>
        </div>
    )
}

export default ProductDetails