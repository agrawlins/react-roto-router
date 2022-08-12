import React from "react"
import { useNavigate, Link, useParams } from "react-router-dom" //params 1
import serviceData from "./serviceData" //params 3

const ServiceDetails = () => {//had props in parameter
    const navigate = useNavigate() 
    const {serviceId} = useParams()//params 2
    const foundService = serviceData.find(service => service._id === serviceId)//params 4
    
    //console.log(useParams())
    //console.log(foundService)
    //console.log(ServiceId)
    
    return (
        
        <div className='main'>
            <h1>{foundService.name}</h1> {/**params 5 */}
            <h3>{foundService.name} - ${foundService.price}</h3> {/**params 5 */}
            <p>{foundService.description}</p> {/**params 5 */}
            <button onClick={()=> navigate("/services")}>Back</button>
        </div>
    )
}

export default ServiceDetails