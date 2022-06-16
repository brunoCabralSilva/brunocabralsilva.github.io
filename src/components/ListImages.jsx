import React from 'react';
import '../css/listimages.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';

class ListImages extends React.Component {
  retornaListas = () => {
    const { itens } = this.props;
    const lista = itens.map((item, index) => {
      return (
        <motion.img
          src={require(`../images/${item.imagem}`)}
          alt={item.alt}
          className={item.classe}
          key={index}
        />
      );
    });
    return lista;
  }
  render() {
    const { retrocedeAcademicos, avancaAcademicos } = this.props;
    return (
      <motion.div
        className="container-list-images"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.3, type: 'spring', stiffness: 40 }}
      >
        <button onClick={retrocedeAcademicos} className="btn-arrow-mobile btn-mob-left">
          <IoIosArrowBack />
        </button>
        <div className="container-img">
          {this.retornaListas()}
        </div>
        <button onClick={avancaAcademicos} className="btn-arrow-mobile btn-mob-right">
          <IoIosArrowForward />
        </button>
      </motion.div>
    );
  }
}

export default ListImages;
