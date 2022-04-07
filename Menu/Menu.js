import React, {  useEffect,useState } from 'react';
import './menu.css'
import Video from '../Assets/Video.mp4'
import Cards from './Cards';




export default function Menu() {
  const [state, setstate] = useState([])
  useEffect(  () => {
    async function  FetchData(){
      const response = await fetch('http://localhost:5000/menu');
      const data = await response.json();
       setstate(data); 
    }
   FetchData()
   }, []);
    return (
      <>
        <div className='menu'>
  <div class="bg-video-wrap">
        <video src={Video} loop muted autoPlay>
        </video>
        <div class="overlay">
        </div>
        <h1 data-aos='fade-up' >Our Menu</h1>
        </div>
</div>
<div>
  <div className="row">

        {
          state.map( (value,index) =>{
            
            return(

    <div class="col-md-4">
      <Cards
      key={value._id} 
      price={value.price}
      url={value.url}
      name={value.product_name}
      description = {value.description}
      />

    </div>
   
   )
  })
}
  </div>
</div>
    </>
    )
}
