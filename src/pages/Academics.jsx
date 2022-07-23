import React from 'react';
import Nav from '../components/Nav';
import Slider from "../components/Slider";
import academics from '../data/academics.json';

function Academics() {
    return (
      <section className="relative">
        <Slider array={academics} type="academics"  />
      </section>
    );
        }
    export default Academics;
