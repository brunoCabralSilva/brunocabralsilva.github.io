import React from 'react';
import '../css/home.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { upDownvariant } from '../variants';

class Home extends React.Component {
  render() {
    return (
      <div className="home" >
        <div>
          <Nav />
        </div>
        <div className="background">
          <motion.main
            variants={upDownvariant}
            initial="hidden"
            animate='visible'
            exit="exit"
          >
            <motion.section
              className="section-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <h1 className="title-text">Bem vindo!</h1>
              <article>
                <p className="paragraph-text">
                  Eu me chamo Bruno e esta é uma página de autoria própria pensada para ser um portfólio sobre mim.
                </p>
                <p className="paragraph-text">
                  Estudante de Desenvolvimento Web e com uma bagagem considerável no mercado de trabalho, trago comigo muita criatividade, intensidade e paixão pelo que faço!
                </p>
              </article>
            </motion.section>
            <aside className="aside-image">
              <motion.img
                src={require('../images/me2.jpg')}
                alt="Imagem de Bruno Cabral"
                class="img-aside"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.3, type: 'spring', stiffness: 40 }}
              />
            </aside>
          </motion.main>
        </div>
        <Footer />
      </div >
    );
  }
}

export default Home;
