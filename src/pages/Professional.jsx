import React from 'react';
import Slider from '../components/Slider';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import professional from '../data/professional.json';
import { motion } from 'framer-motion';

function Professional() {
    return (
      <section>
        <div>
        <Nav font="bg-black" />
        </div>
        <div className="flex flew-row p-2">
          <Slider array={professional} type="professional"  />
        </div>
        <Footer />
      </section>
    );
        }
    export default Professional;
