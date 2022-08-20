import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Slider from "../components/Slider";
import academics from '../data/academics.json';
import professional from '../data/professional.json';

function About() {
    return (
      <div>
        <Nav color="white" className="z-50" />
        <Header img="me2.jpg" />
        <section className="w-full bg-cover bg-center flex items-center justify-center mb-20">
          {/* <div className="absolute w-full h-full sm:h-90vh z-0">
            <div className="w-full h-1/2" />
            <div className="w-full h-1/2">
              <img src={require('../images/h3.png')} alt="" className="w-full h-full object-cover opacity-60" />
            </div>
          </div>
          <div className="relative w-9/12 h-70vh my-20 relative flex items-center justify-center">
            <div className="flex w-full h-full right-0 top-0 justify-end rounded-2xl absolute">
              <img src={require('../images/eter.jpg')} className="m-4 rounded-2xl h-4/5 w-2/3 object-cover opacity-80 bg-heaven bg-cover bg-center" alt="" />
            </div>
            <div className="left-0 flex w-full h-full items-end justify-start rounded-2xl absolute">
              <div className="m-4 rounded-2xl h-2/3 w-1/2 bg-cover bg-white flex justify-center items-center relative" alt="">
              <img src={require('../images/h3.png')} alt="" className="w-full h-full object-cover opacity-30 absolute rounded-xl" />
                <p className="py-2 text-center w-10/12 z-20">
                  {academics[0].descricao}
                </p>
              </div>
            </div>
            <div className="right-4 py-10 p flex w-full h-full items-end justify-end rounded-2xl absolute">
              <img src={require(`../images/nassau.png`)} className="m-4 rounded-2xl w-1/12 object-cover bg-center bg-heaven2" alt="" />
            </div> */}
            <Slider array={academics} type="academics"  />
          {/* </section>
          <section> */}
            <Slider array={professional} type="professional"  />
        {/* </div> */}
      </section>
      </div>
    );
        }
    export default About;
