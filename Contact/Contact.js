import React, {  useEffect } from 'react';
import './contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Contact() {
    useEffect(() => {
        Aos.init({
            duration :2000
        })
            }, []);
    return (
        <div className='contact'>
            <section1 >

            <h  data-aos='fade-up'>Contact Us</h>
            <form>
  <div  data-aos='fade-up' class="form-group mx-4">
    <label  data-aos='fade-up' for="exampleInputEmail1 " className='text-warning' >Enter your Email address</label>
    <input  data-aos='fade-up' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small  data-aos='fade-up' id="emailHelp" class="form-text ">We'll never share your email with anyone else.</small>
    <label  data-aos='fade-up' for="exampleInputEmail1"className='text-warning'  >Enter Your Name</label>
    <input  data-aos='fade-up' type="text" class="form-control text-warning" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>

  </div>

  <div class="form-group mx-3">
    <label data-aos='fade-up' for="exampleFormControlTextarea1" className='text-warning'>Enter your Message</label>
    <textarea  data-aos='fade-up' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="text-center">
	<button  type="button" class="btn btn-primary my-3 bg-warning ">Sumbit</button>
</div>
  </form>
            </section1>
        </div>
    )
}
