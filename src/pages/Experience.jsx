import React from 'react';
import Nav from '../components/Nav';
import Slider from "../components/Slider";
import Footer from '../components/Footer';
import academics from '../data/academics.json';
import professional from '../data/professional.json';

function Experience() {
    return (
      <div>
        <Nav color="black" className="z-50" />
        <section className="relative">
          <Slider array={academics} type="academics"  />
        </section>
        <section>
          <Slider array={professional} type="professional"  />
      </section>
      <Footer />
      </div>
    );
        }
    export default Experience;
