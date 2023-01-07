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
        <a
          href="https://community.revelo.com/como-conectar-o-node-js-com-o-mysql/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require('../images/works-academy/post-001.png')}
            alt="Conectando node.js e Mysql"
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
        />
        </a>
      </div>
    );
  }
}