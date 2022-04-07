import React from 'react'
import { useSelector } from 'react-redux'


export default function Order_details() {
    const product_name = useSelector((state )=>state.Show_order_Details.name)
    const image = useSelector((state )=>state.Show_order_Details.img)  
    const price = useSelector((state )=>state.Show_order_Details.price)  
  return (
    <div style={{marginTop : '15px'}}>
   <div class="card text-white bg-warning m-auto" style={{maxWidth: "18rem"}}>
    <div class="card-header text-dark">Order Details</div>
        <img src={image} style={{width : "100%"}}/>
    <div class="card-body">
      <h5 class="card-title text-dark"> Meal : {product_name}</h5>
      <h5 class="card-title text-dark"> price : £ {price}</h5>
      <p class="card-text text-dark">order num : {Math.floor(Math.random() * 100000)}</p>

    </div>
    </div>
      <a  className="btn btn-success mx-3  my-3 bg-success">Sumbit Order</a>
    </div>
 

  )
}
