import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

class Home extends React.Component {
  render() {
    return (
      <div className="min-h-screen bg-cover mx-16">
        <div>
          <Nav />
        </div>
        <motion.main
          className="flex flex-col sm:flex-col items-start my-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="w-full text-5xl pt-10 pb-24">
            <h1 className="text-center w-full pb-2">Bruno Cabral</h1>
            <h1 className="text-center w-full pb-2">Javascript | HTML | CSS | React</h1>
            <h1 className="text-center w-full">Desenvolvedor Web</h1>
          </div>
          <div className="flex flex-row justify-center w-11/12 mx-auto">
          <section className="w-full sm:w-27% flex flex-col justify-around">
            <article>
              <h1 className="text-gray-500 py-4">BIOGRAFIA</h1>
              <p className="">
                Trabalhando por dinheiro e programando por amor! Eu sou Bruno, estudante de Desenvolvimento Web na Trybe!
              </p>
            </article>
            <article>
            <h1 className="text-gray-500 py-4">CONTATO</h1>
                <p>Campina Grande, Paraíba, Brasil.</p>
                <p>bruno.cabral.silva2018@gmail.com</p>
                <p>+55 83 9 98364408</p>
            </article>
            <article>
            <h1 className="text-gray-500 py-4">SERVÇOS</h1>
              <p>Web Design</p>
              <p>Mobile Aplication Design</p>
              <p>Animation</p>
            </article>
          </section>
          <section className="w-full sm:w-65% flex items-center justify-center relative sm:h-screen">
              <div className="border-2 text-gray-300 absolute w-9/12 h-98 rounded-full" />
              <div className="relative z-20 flex items-center justify-center">
                <div className="border border-black rounded-full z-10 absolute h-full bg-gray-300 w-10/12" />
                <motion.img
                  src={require('../images/imagem-bruno-cabral-semfundo.jpeg')}
                  alt="Imagem de Bruno Cabral"
                  className="rounded-full relative z-20 w-10/12 border border-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1.3, type: 'spring', stiffness: 40 }}
                />
              </div>
          </section>
          <section className="mr-2 w-full h-screen sm:w-27% flex flex-col justify-around text-right">
            <article>
              <h1 className="text-gray-500 py-4">COMMITS NO GITHUB</h1>
              <p className="text-5xl">358</p>
            </article>
            <article>
            <h1 className="text-gray-500 py-4">PROJETOS</h1>
            <p className="text-5xl">38</p>
            </article>
            <article>
            <h1 className="text-gray-500 py-4">Formações</h1>
            <p className="text-5xl">58</p>
            </article>
          </section>
          </div>
          <div className="w-full flex justify-center">
            <hr className="w-11/12 my-24" />
          </div>
          <div className="w-full flex justify-center">
            <img src={require('../images/trêas tecnologias.jpg')} alt="" className="w-3/12" />
          </div>
          <div className="w-full flex justify-center">
            <hr className="w-11/12 my-24" />
          </div>
        </motion.main>
        <Footer />
      </div >
    );
  }
}

export default Home;
