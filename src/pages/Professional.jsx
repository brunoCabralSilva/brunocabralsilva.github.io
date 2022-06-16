import React from 'react';
import '../css/academics.css';
import '../css/professional.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Nav from '../components/Nav';
import Description from '../components/Description'
import ListImages from '../components/ListImages';
import Footer from '../components/Footer';
import professional from '../data/professional.json';
import { motion } from 'framer-motion';
import { upDownvariant } from '../variants';

class Professional extends React.Component {
  state = {
    posicao: 1,
    nassau: "img-nassau img-academics img-selected",
    orbitall: "img-orbitall img-academics",
    aec: "img-aec img-academics",
    empresa: professional[0].empresa,
    cargo: professional[0].cargo,
    descricaoAcademia: professional[0].descricao,
    datas: `${professional[0].dataInicio} até ${professional[0].dataConclusão}`,
    duracao: professional[0].duracao,
  }

  nextPage = () => {
    const { history } = this.props;
    history.push('/academico');
  }

  atualizaDadosExibidos = () => {
    const { posicao } = this.state;
    this.setState({
      empresa: professional[posicao].empresa,
      cargo: professional[posicao].cargo,
      descricaoAcademia: professional[posicao].descricao,
      datas: `${professional[posicao].dataInicio} até ${professional[posicao].dataConclusão}`,
      duracao: professional[posicao].duracao,
    });
  }

  avancaAcademicos = () => {
    const { posicao } = this.state;
    posicao >= 2
      ? this.setState({ posicao: 0 })
      : this.setState((prevState) => ({
        posicao: prevState.posicao + 1,
      }));

    switch (posicao) {
      case 1: this.setState({
        nassau: "img-nassau img-academics",
        orbitall: "img-orbitall img-academics img-selected",
        aec: "img-aec img-academics",
      });
        break;
      case 2:
        this.setState({
          nassau: "img-nassau img-academics",
          orbitall: "img-orbitall img-academics",
          aec: "img-aec img-academics img-selected",
        });
        break;
      case 0:
        this.setState({
          nassau: "img-nassau img-academics img-selected",
          orbitall: "img-orbitall img-academics",
          aec: "img-aec img-academics",
        });
        break;

      default: return null;
    }

    this.atualizaDadosExibidos();
  }

  retrocedeAcademicos = () => {
    const { posicao } = this.state;
    posicao <= 0
      ? this.setState({ posicao: 2 })
      : this.setState((prevState) => ({
        posicao: prevState.posicao - 1,
      }));

    switch (posicao) {
      case 1: this.setState({
        nassau: "img-nassau img-academics",
        orbitall: "img-orbitall img-academics img-selected",
        aec: "img-aec img-academics",
      });
        break;
      case 2:
        this.setState({
          nassau: "img-nassau img-academics",
          orbitall: "img-orbitall img-academics",
          aec: "img-aec img-academics img-selected",
        });
        break;
      case 0:
        this.setState({
          nassau: "img-nassau img-academics img-selected",
          orbitall: "img-orbitall img-academics",
          aec: "img-aec img-academics",
        });
        break;
      default: return null;
    }

    this.atualizaDadosExibidos();
  }

  render() {
    const {
      nassau,
      orbitall,
      aec,
      posicao,
      empresa,
      descricaoAcademia,
      cargo,
      datas,
      duracao,
    } = this.state;
    console.log(posicao);
    const listaDeAcademias = [
      {
        classe: nassau,
        alt: 'Imagem da Facultade Maurício de Nassau',
        imagem: "nassau.jpg",
      },
      {
        classe: orbitall,
        alt: 'Imagem da Orbitall S.A.',
        imagem: "orbitall.jpg",
      },
      {
        classe: aec,
        alt: 'Imagem da Aec',
        imagem: "aec.jpg",
      }];

    return (
      <section>
        <div>
          <Nav />
        </div>
        <div className="professional">
          <motion.div
            className="prof-content"
            variants={upDownvariant}
            initial="hidden"
            animate='visible'
            exit={{ y: '-100vh', transition: { duration: 1 } }}
          >
            <div className="academics-text-left">
              <motion.button
                onClick={this.retrocedeAcademicos}
                className="btn-arrow btn-arrow-right-prof"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <IoIosArrowBack />
              </motion.button>
              <Description
                nome={empresa}
                area={cargo}
                datas={datas}
                duracao={duracao}
                descricao={descricaoAcademia}
              />
            </div>
            <ListImages
              itens={listaDeAcademias}
              retrocedeAcademicos={this.retrocedeAcademicos}
              avancaAcademicos={this.avancaAcademicos}
            />
            <motion.button
              onClick={this.avancaAcademicos}
              className="btn-arrow btn-arrow-left-prof"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <IoIosArrowForward />
            </motion.button>
          </motion.div>
        </div>
        <Footer />
      </section >
    );
  }
}

export default Professional;
