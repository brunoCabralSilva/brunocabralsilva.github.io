import React, { useState, useEffect } from 'react';
import portfolio from '../data/portfolio.json';
import Nav from '../components/Nav';
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Projects() {
  const newPort = portfolio.filter((port, index) => index !== 0);
  const [isToggled, setToggle] = useState(false);
  const [object, setObject] = useState(null);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);

  return (
    <section>
      {/* <div className="z-50">
        <Nav />
      </div> */}
      <section className="pt-10 sm:pt-20 flex flex-row flex-wrap items-center w-full my-10">
        {
          newPort.map((port) => (
            <div className="h-90 w-1/3">
              <div
                onClick={() => setToggle(prevValue => !prevValue )}
                className="h-90 w-full p-2"
              >
                <p>{ port.text }</p>
                <img
                  src={require(`../images/projects/${port.image}`)}
                  className="h-56 w-full object-cover"
                  onClick={() => {
                    setToggle(prevValue => !prevValue );
                    setObject(port)
                  }}
                  alt="" />
              </div>
            </div>
          ))
        }
      </section>
        <AnimatePresence>
          { object &&
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              className="fixed top-0 w-full h-screen flex items-center justify-center bg-dark-transp z-50"
            >
              <div className="w-11/12 h-11/12 flex items-center justify-center relative">
                <h2>{object.text}</h2>
                <button className="text-5xl fixed top-10 right-5 sm:right-20 sm:top-14 color-white z-50"
                  onClick={ () => setObject(null)}
                >
                  <AiFillCloseCircle className="" />
                </button>
                <motion.img
                  src={require(`../images/projects/${object.image}`)}
                  className="h-90vh w-full object-cover absolute"
                  alt="" />
              </div>
            </motion.div>
        }
      </AnimatePresence>
    </section >
  );
}