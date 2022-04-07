import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function View_card() {
  const product_name = useSelector((state )=>state.ChangeState.name) 
  const price = useSelector((state )=>state.ChangeState.price)
  const image = useSelector((state )=>state.ChangeState.img) 
  const description = useSelector((state )=>state.ChangeState.description) 
 

  return (
    <>
<div data-aos='fade-left' id='card' class="card mb-1 my-3 mx-3 bg-dark text-primary " >
  <div class="row g-0">
    <div  id='image' class="col-md-4">
      <img src={image} class="img-fluid rounded-start" alt="Here is no Image"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title text-white">{product_name}</h5>
        <h5 class="card-title text-white"> price : £ {price}</h5>
        <p class="card-text text-white" >{description}</p>
        <Link to='order_details' className="btn btn-success mx-3 bg-success"> order Now</Link>
 

      </div>
    </div>
  </div>
</div>

 


    </>
  )
}
