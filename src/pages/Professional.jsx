import React from 'react';
import '../css/academics.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import data from '../data.json';

class Professional extends React.Component {
  state = {
    posicao: 1,
    nassau: "img-nassau img-academics",
    trybe: "img-trybe img-academics",
    ufcg: "img-ufcg img-academics",
    eter: "img-eter img-academics img-selected",
    academia: data[0].academia,
    curso: data[0].curso,
    descricaoAcademia: data[0].descricao,
    datas: `${data[0].dataInicio} até ${data[0].dataConclusão}`,
    duracao: data[0].duracao,
  }

  nextPage = () => {
    const { history } = this.props;
    history.push('/professional');
  }

  atualizaDadosExibidos = () => {
    const { posicao } = this.state;
    this.setState({
      academia: data[posicao].academia,
      curso: data[posicao].curso,
      descricaoAcademia: data[posicao].descricao,
      datas: `${data[posicao].dataInicio} até ${data[posicao].dataConclusão}`,
      duracao: data[posicao].duracao,
    });
  }

  avancaAcademicos = () => {
    const { posicao } = this.state;
    posicao >= 3
      ? this.setState({ posicao: 0 })
      : this.setState((prevState) => ({
        posicao: prevState.posicao + 1,
      }));

    switch (posicao) {
      case 1: this.setState({
        nassau: "img-nassau img-academics img-selected",
        trybe: "img-trybe img-academics",
        ufcg: "img-ufcg img-academics",
        eter: "img-eter img-academics",
      });
        break;
      case 2:
        this.setState({
          nassau: "img-nassau img-academics",
          trybe: "img-trybe img-academics",
          ufcg: "img-ufcg img-academics img-selected",
          eter: "img-eter img-academics",
        });
        break;
      case 3:
        this.setState({
          nassau: "img-nassau img-academics",
          trybe: "img-trybe img-academics img-selected",
          ufcg: "img-ufcg img-academics",
          eter: "img-eter img-academics",
        });
        break;
      case 0:
        this.setState({
          nassau: "img-nassau img-academics",
          trybe: "img-trybe img-academics",
          ufcg: "img-ufcg img-academics",
          eter: "img-eter img-academics img-selected",
        });
        break;
      default: return null;
    }

    this.atualizaDadosExibidos('avancar');
  }

  retrocedeAcademicos = () => {
    const { posicao } = this.state;
    posicao <= 0
      ? this.setState({ posicao: 3 })
      : this.setState((prevState) => ({
        posicao: prevState.posicao - 1,
      }));

    switch (posicao) {
      case 1: this.setState({
        nassau: "img-nassau img-academics img-selected",
        trybe: "img-trybe img-academics",
        ufcg: "img-ufcg img-academics",
        eter: "img-eter img-academics",
      });
        break;
      case 2:
        this.setState({
          nassau: "img-nassau img-academics",
          trybe: "img-trybe img-academics",
          ufcg: "img-ufcg img-academics img-selected",
          eter: "img-eter img-academics",
        });
        break;
      case 3:
        this.setState({
          nassau: "img-nassau img-academics",
          trybe: "img-trybe img-academics img-selected",
          ufcg: "img-ufcg img-academics",
          eter: "img-eter img-academics",
        });
        break;
      case 0:
        this.setState({
          nassau: "img-nassau img-academics",
          trybe: "img-trybe img-academics",
          ufcg: "img-ufcg img-academics",
          eter: "img-eter img-academics img-selected",
        });
        break;
      default: return null;
    }

    this.atualizaDadosExibidos('retornar');
  }

  render() {
    const {
      nassau,
      trybe,
      ufcg,
      eter,
      academia,
      descricaoAcademia,
      curso,
      datas,
      duracao,
    } = this.state;
    return (
      <section>
        <div>
          <Nav />
        </div>
        <div className="academics">
          <div className="academics-content">
            <img
              src={require("../images/software-developer.png")}
              className="img-background-computer"
              alt="imagem de computador"
            />
            <div className="academics-text">
              <button className="btn-arrow btn-arrow-left-acad">
                <IoIosArrowBack />
              </button>
              <div>
                <h2 className="subtitle-academics">{academia}</h2>
                <p className="paragraph-acad"><strong>Curso:</strong> {curso}</p>
                <p className="paragraph-acad"><strong>Período:</strong> {`${datas} - ${duracao}`}</p>
                <p className="paragraph-acad">{descricaoAcademia}</p>
              </div>
            </div>
            <div className="container-img">
              <img
                src={require("../images/eter.jpg")}
                alt="imagem do complexo Redentorista"
                className={eter}
              />
              <img
                src={require("../images/uninassau.jpeg")}
                alt="Foto da Uninassau"
                className={nassau}
              />
              <img
                src={require("../images/ufcg.jpg")}
                alt="Foto do Campus da UFCG"
                className={ufcg}
              />
              <img
                src={require("../images/trybe.png")}
                alt="Foto de parte do time da Trybe"
                className={trybe}
              />
            </div>

            <button className="btn-arrow btn-arrow-right-acad">
              <oIosArrowForward />
            </button>
          </div>
        </div>
        <Footer />
      </section >
    );
  }
}

export default Professional;
