import React from 'react';
import PropTypes from 'prop-types';
import '../css/description.css';
import { motion } from 'framer-motion';

class Description extends React.Component {
  descriptions = () => {
    const { descricao } = this.props;
    const desc = descricao.map((d) => {
      return (<p>{d}</p>);
    });
    return desc;
  }
  render() {
    const { nome, area, datas, duracao } = this.props;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h2 className="subtitle-academics">{nome}</h2>
        <p className="paragraph-acad"><strong>Curso:</strong> {area}</p>
        <p className="paragraph-acad"><strong>Período:</strong> {`${datas} - ${duracao}`}</p>
        <p className="paragraph-acad">{this.descriptions()}</p>
      </motion.div >
    );
  }
}

export default Description;

Description.propTypes = {
  academia: PropTypes.string.isRequired,
  curso: PropTypes.string.isRequired,
  datas: PropTypes.string.isRequired,
  duracao: PropTypes.string.isRequired,
  descricaoAcademia: PropTypes.string.isRequired,
};