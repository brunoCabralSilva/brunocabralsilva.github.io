import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";

interface ArticlesProps {
  history: any,
}

export default class Articles extends React.Component<ArticlesProps, {}> {
  render() {
    return (
      <div>
        <Nav
          history={ this.props.history }
          img=""
          color="white"
        />
        <Header img="me2.jpg" />
        <section className="relative">
          <p className="font-aboreto text-4xl sm:text-5xl pt-10 md:text-6xl md:pt-0 text-black w-full text-center z-50">ARTIGOS</p>
          <p className="w-2/3 sm:w-1/3 text-center mx-auto mt-4 mb-14 sm:mb-0">
            Fruto de uma parceria com a Revelo Community Network Brasil e América Latina, produzo artigos que são publicados em português e espanhol, abordando as tecnologias React, Tailwind, Node.js e Mysql. A seguir, estarão listados todos os meus artigos que já foram publicados.
          </p>
        </section>
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-1">
          <a
            href="https://community.revelo.com/como-conectar-o-node-js-com-o-mysql/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require('../images/works-academy/post-001.png')}
              alt="Conectando node.js e Mysql"
              className="border-2 border-white hover:border-black"
            />
          </a>
          <a
            href="https://community.revelo.com/tres-passos-para-publicar-projetos-react-no-github/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require('../images/works-academy/post-002.png')}
              alt="Publicando projetos no github pages"
              className="border-2 border-white hover:border-black"
            />
          </a>
          <a
            href="https://community.revelo.com/como-utilizar-redux-no-react/"
            target="_blank"
            rel="noreferrer"
          >
          <img
            src={require('../images/works-academy/post-003.png')}
            alt="usando redux no react"
            className="border-2 border-white hover:border-black"
          />
          </a>
        </div>
      </div>
    );
  }
}