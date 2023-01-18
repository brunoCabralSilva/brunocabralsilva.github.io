import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import articlesData from '../data/articles.json';

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
          {
            articlesData.map((article) => (
              <a
                href={ article.link }
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require(`../images/works-academy/revelo/${article.image}`)}
                  alt={article.titulo }
                  className="border-2 border-white hover:border-black"
                />
              </a>
            ))
          }
        </div>
      </div>
    );
  }
}