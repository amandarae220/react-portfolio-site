import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id='home'>
      <div className='container text-center mt-5'></div>
      <div id='hero'>
        <h1>
          Amanda <br />
          Rae
        </h1>
        <p>I build things on the world wide web.</p>
        <div id='wrapper'>
        <div id='wrapper-inner'>
          <div id='scroll-down'>
            <span class='arrow-down'></span>
            <span id='scroll-title'>MY WORK</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
