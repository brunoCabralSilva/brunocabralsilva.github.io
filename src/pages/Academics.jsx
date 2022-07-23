import React from 'react';
import Nav from '../components/Nav';
import Slider from "../components/Slider";
import Footer from '../components/Footer';
import academics from '../data/academics.json';

function Academics() {
    return (
      <section className="">
        <div>
          <Nav font="bg-black" />
        </div>
        <div className="flex flew-row p-2">
          <Slider array={academics} type="academics"  />
        </div>
      </section>
    );
        }
    export default Academics;
     <Footer />
