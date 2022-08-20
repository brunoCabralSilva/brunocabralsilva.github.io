import React from 'react';
import Nav from '../components/Nav';
import { motion } from 'framer-motion';

class Contact extends React.Component {
  render() {
    return (
      <section>
        <div>
          <Nav />
        </div>
        <motion.section
          className="contact"
        >
          <motion.div
            className="div-contact"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0, transition: { duration: 1 } }}
            transition={{ delay: 1, duration: 1 }}
          >
            <img
              src ={require("../images/me.png")}
              alt="foto de Bruno"
              className="rounded-full"
            />
            <div className="contact-links">
              <a
                href="https://contate.me/brunoCabralSilva"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-cabral-336076228/"
                target="_blank"
                rel="noreferrer">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/brunoCabralSilva"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </motion.div>
        </motion.section>
      </section >
    );
  }
}

export default Contact;
