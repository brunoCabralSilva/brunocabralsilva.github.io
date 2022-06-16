import React from 'react';
import '../css/academics.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Nav from '../components/Nav';
import Description from '../components/Description'
import ListImages from '../components/ListImages';
import Footer from '../components/Footer';
import academics from '../data/academics.json';

class antigo extends React.Component {
  state = {
    posicao: 1,
    nassau: "img-nassau img-academics",
    trybe: "img-trybe img-academics",
    ufcg: "img-ufcg img-academics",
    eter: "img-eter img-academics img-selected",
    academia: academics[0].academia,
    curso: academics[0].curso,
    descricaoAcademia: academics[0].descricao,
    datas: `${academics[0].dataInicio} até ${academics[0].dataConclusão}`,
    duracao: academics[0].duracao,
  }

  nextPage = () => {
    const { history } = this.props;
    history.push('/professional');
  }

  atualizaDadosExibidos = () => {
    const { posicao } = this.state;
    this.setState({
      academia: academics[posicao].academia,
      curso: academics[posicao].curso,
      descricaoAcademia: academics[posicao].descricao,
      datas: `${academics[posicao].dataInicio} até ${academics[posicao].dataConclusão}`,
      duracao: academics[posicao].duracao,
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
    const listaDeAcademias = [{
      classe: eter,
      alt: 'Imagem da Escola Técnica Redentorista',
      imagem: "eter.jpg",
    },
    {
      classe: nassau,
      alt: 'Imagem da Facultade Maurício de Nassau',
      imagem: "uninassau.jpeg",
    },
    {
      classe: ufcg,
      alt: 'Imagem do Campus da UFCG',
      imagem: "ufcg.jpg",
    },
    {
      classe: trybe,
      alt: 'Imagem de parte do time da Trybe',
      imagem: "trybe.png",
    }];
    return (
      <section>
        <div>
          <Nav />
        </div>
        <div className="academics">
          <div className="academics-content">
            <button onClick={this.retrocedeAcademicos} className="btn-arrow btn-arrow-left-acad">
              <IoIosArrowBack />
            </button>
            <ListImages
              itens={listaDeAcademias}
              retrocedeAcademicos={this.retrocedeAcademicos}
              avancaAcademicos={this.avancaAcademicos}
            />
            <div className="academics-text-right">
              <Description
                nome={academia}
                area={curso}
                datas={datas}
                duracao={duracao}
                descricao={descricaoAcademia}
              />
              <button onClick={this.avancaAcademicos} className="btn-arrow btn-arrow-right-acad">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </section >
    );
  }
}

export default antigo;
