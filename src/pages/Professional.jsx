import React from 'react';
import Slider from '../components/Slider';
import professional from '../data/professional.json';
import { motion } from 'framer-motion';

function Professional() {
    return (
      <section>
          <Slider array={professional} type="professional"  />
      </section>
    );
        }
    export default Professional;
