import React from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div>
          <Nav />
        </div>
        <main>
          <section className="section-content">
            <div>
              <h1 className="title-text">Bem vindo!</h1>
              <article>
                <p className="paragraph-text">
                  Eu me chamo Bruno e esta é uma página de autoria própria pensada para ser um portfólio sobre mim.
                </p>
                <p className="paragraph-text">
                  Estudante de Desenvolvimento Web e com uma bagagem considerável no mercado de trabalho, trago comigo muita criatividade, intensidade e paixão pelo que faço!
                </p>
              </article>
              <div className="div-arrow-down">
                <img
                  src={require('../images/arrow-down.png')}
                  className="arrow-down"
                  alt="seta para baixo"
                />
              </div>
            </div>
            <img
              src={require('../images/me3.jpg')}
              alt="Imagem de Bruno Cabral"
              class="img-background"
            />
          </section>
          <aside className="aside-image">
            <img
              src={require('../images/me2.jpg')}
              alt="Imagem de Bruno Cabral"
              class="img-aside"
            />
          </aside>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
