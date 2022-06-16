import React from 'react';
import '../css/about.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { downUpvariant } from '../variants';

class About extends React.Component {
  direction = () => {
    const { history } = this.props;
    history.push('/academico');
  }

  render() {
    return (
      <section>
        <div>
          <Nav />
        </div>
        <div className="background">
          <motion.div className='about'
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0, transition: { duration: 1 } }}
            transtition={{ duration: 1.5 }}
          >
            <motion.section
              className="section-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <h1 className="title-text">Sobre mim</h1>
              <article>
                <p className="paragraph-text">Nascido em Campina Grande, segunda maior cidade da Paraíba, desde cedo estudo para me qualificar no mercado de trabalho. Do ramo da eletrônica até a informática, tive incontáveis aprendizados que levarei para toda a vida.</p>
                <p className="paragraph-text">O mais novo e avassalador passo da minha vida em direção a minha futura profissão aspirada de Desenvolvedor Web foi ter ingressado em ferereiro de 2022 na Trybe. Nela, tenho acumulado cada vez mais conhecimento sobre a área e cada vez mais ganho confiança de que estou me tornando um ótimo profissional!</p>
              </article>
            </motion.section>
            <aside className="aside-image">
              <motion.img
                src={require('../images/imagem-bruno-cabral-semfundo.jpeg')}
                alt="Imagem de Bruno Cabral"
                className="img-aside img-aside-about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.3, type: 'spring', stiffness: 40 }}
              />
            </aside>
          </motion.div>
        </div>
        <Footer />
      </section >
    );
  }
}

export default About;
