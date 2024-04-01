import React from 'react'
import Illustrator from '../WebsitePngs/illustrator.png'
import './Styles/Home.css'
import Clubs from './Clubs'

const Home = () => {
  return (
    <div className='home'>

      <div className='home-section'>
        <div id='left-home'>
          <div id='desc-home'>
            <h1>Welcome to our University Club Hub!</h1>
            <p>Welcome to our vibrant community of student clubs! Dive into a wide range of interests, events, and connections. Explore, connect, and thrive with us as you find your niche and make lasting friendships. Your journey begins here, where possibilities are endless. Welcome to a world of opportunities!</p>
          </div>
        
          <div id='btns-home'>
            <a href='#'><button id='prim-btn'>Join a club</button></a>
            <a href='#'><button id='second-btn'>Explore Events</button></a>
          </div>
        </div>
      
          <div id='right-home'>
            <img src={Illustrator}/>
          </div>
      </div>

      <div id="clubs-section">
        <Clubs/>
      </div>
    
    </div>
  );
};

export default Home;