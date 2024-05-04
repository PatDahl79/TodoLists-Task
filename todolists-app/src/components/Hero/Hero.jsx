import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import about from '../../assets/Brain-img.png';

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img src={about} alt="" />
        <h1><span>To Do Lists for ADHD</span></h1>
        <h2>Unlock Your Potential with To-Do Lists for ADHD</h2>
        <p>Living with ADHD can feel like navigating a never-ending whirlwind of thoughts and tasks. 
            But what if there was a simple tool that could help you regain control and unlock your full potential?</p>
    <div className="hero-action">
    <   div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#todo'>To do list</AnchorLink></div>
    </div>
    </div>
  )
}

export default Hero
