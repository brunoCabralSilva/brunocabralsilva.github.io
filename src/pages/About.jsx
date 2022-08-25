import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Slider from "../components/Slider";
import academics from '../data/academics.json';
import professional from '../data/professional.json';

function About() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
  return (
    <div>
      <Nav color="white" className="z-50" />
      <Header img="me2.jpg" />
      <Slider type = "academics" array ={ academics } />
      <Slider type = "professional" array ={ professional } />
    </div>
  );
      }
  export default About;
