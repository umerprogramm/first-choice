import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { order_now, View } from '../state/actions/action';


export default function Cards(props) {
  const Dispatch = useDispatch()
  return (
    <>
 
  <div data-aos='fade-up' className="card" style={{width: "18rem",marginLeft:'50px', marginTop:'25px', backgroundColor: 'black',border: '3px solid white'}}>
  <img className="card-img-top" src={props.url} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title text-white">{props.name}</h5>
  
    <Link to='view_products' className="btn btn-primary" onClick={()=>Dispatch(View({name : props.name,price : props.price, url : props.url,description : props.description } ))}>View</Link>
    <Link to='order_details' className="btn btn-success mx-3 bg-success"  onClick={()=>Dispatch(order_now({name : props.name,price : props.price, url : props.url} ))}> Order Now</Link>

  </div>
</div>
    </>
  )
} 
