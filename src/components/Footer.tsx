import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="z-30 flex flex-col items-center w-full text-black relative">
        <img
          src={require('../images/h4.png')}
          alt=""
          className="w-full h-full object-cover object-bottom opacity-70 absolute" />
        <p className="mt-1 sm:mt-0 text-center sm:text-left pl-4 pt-10 z-30"><strong>© 2022 Copyright Bruno Cabral</strong></p>
        <div className="flex flex-row w-full justify-center pb-10 mt-3 z-30">
          <a href="https://contate.me/brunoCabralSilva" target="_blank" rel="noreferrer">
            <i className="fa-brands px-3 pt-0 pb-2 fa-whatsapp text-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/bruno-cabral-336076228/" target="_blank" rel="noreferrer">
            <i className="fa-brands px-3 pt-0 pb-2 fa-linkedin text-lg"></i>
          </a>
          <a href="https://github.com/brunoCabralSilva" target="_blank" rel="noreferrer">
            <i className="fa-brands pl-3 pt-0 pr-2 pb-0 text-lg fa-github"></i>
          </a>
        </div>
      </footer>
    );
  }
}