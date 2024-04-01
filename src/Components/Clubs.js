import React from 'react'
import './Styles/Clubs.css'
import ieeeLogo from '../WebsitePngs/clubs/ieee.png'
import cpuLogo from '../WebsitePngs/clubs/cpu.png'
import binbeatsLogo from '../WebsitePngs/clubs/binbeat.png'

const Clubs = () => {
  return (
    <div className='clubs'>

        <div id='head-clubs'>
            <a><button>Our Clubs</button></a>
            <p>Discover the array of clubs at our university! From academics to arts, sports to service, including technology and robotics. Find your passion and <strong>Apply</strong> now!</p>
        </div>

        <div id='content-clubs'>

            <div id='ieee-club'>
                <a><img id='ieee-img' src={ieeeLogo}/></a>
                <p>The IEEE club is where tech enthusiasts unite! Dive into projects, workshops and events in High Tech.</p>
                <a><button>Apply</button></a>
            </div>

            <div id='cpu-club'>
                <a><img id='cpu-img' src={cpuLogo}/></a>
                <p>The CPU Club is all about robotics! Dive into competitions, and workshops to explore this field Join us now</p>
                <a><button>Apply</button></a>
            </div>

            <div id='binbeats-club'>
                <a><img id='binbeats-img' src={binbeatsLogo}/></a>
                <p>Binary Beats: Where music meets tech! Join us for workshops and  jam sessions to blend technology with art</p>
                <a><button>Apply</button></a>
            </div>

        </div>

    </div>
  );
};

export default Clubs;