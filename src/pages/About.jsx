import React from 'react';
import '../css/about.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

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
        <section className="about">
          <img
            src={require("../images/software-developer.png")}
            className="img-background-computer"
            alt="imagem de computador"
          />
          <img
            src={require("../images/imagem-bruno-cabral-semfundo.jpeg")}
            alt="imagem de Bruno Cabral"
            className="rounded-circle img-myself"
          />
          <div className="about-text">
            <h1 className="title-about">Sobre mim</h1>
            <p className="paragraph-about">Nascido em Campina Grande, segunda maior cidade da Paraíba, desde cedo estudo para me qualificar no mercado de trabalho. Do ramo da eletrônica até a informática, tive incontáveis aprendizados que levarei para toda a vida.</p>
            <p className="paragraph-about">O mais novo e avassalador passo da minha vida em direção a minha futura profissão aspirada de Desenvolvedor Web foi ter ingressado em ferereiro de 2022 na Trybe. Nela, tenho acumulado cada vez mais conhecimento sobre a área e cada vez mais ganho confiança de que estou me tornando um ótimo profissional!</p>
            <p className="paragraph-about">mas como minha jornada não começou aqui, que tal acompanharmos um pouco da minha jornada acadêmica antes disso?</p>
          </div>
          <button
            className="btn-arrow-down"
            onClick={this.direction}
          >
            <img
              src={require('../images/arrow-right.png')}
              className="arrow-right"
              alt="seta para baixo"
            />
          </button>
        </section>
        <div className="footer">
          <Footer />
        </div>
      </section>
    );
  }
}

export default About;
