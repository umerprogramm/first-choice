import React, {  useEffect } from 'react';
import Video from '../Assets/Video.mp4'
import  './about.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(() => {
        Aos.init({
            duration :2000
        })
            }, []);
    return (
        <div className='about'>
             <div class="bg-video-wrap">
        <video src={Video} loop muted autoPlay>
        </video>
        <div class="overlay">
        </div>
        </div>
        <h1 data-aos='fade-up'>About Us</h1>
        <p data-aos='fade-right' className='mx-3 my-3'>

        First Choice Restaurant, we’re dedicated to creating authentic Fast Food that will have you craving for more. We take great pride in not only our Food but in our heritage too. We're delighted that a family-run business such as ours can share our beloved culture with as many customers as possible. It has always been our goal to make sure that customers get to experience authentic Fast Food. When it comes to our approach to cooking, we’re always looking for the tastiest flavours and aromas, as we’re always looking for new ways to amaze our customers.</p>
        </div>
    )
}
