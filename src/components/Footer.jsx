import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="text-black flex flex-col sm:flex-row items-center justify-between mx-4 pb-3 sm:pb-0">
        <p className="mt-2 sm:mt-0 text-center sm:text-left"><strong>© 2022 Copyright Bruno Cabral</strong></p>
        <div>
          <p className="mt-2 sm:mt-0 text-center sm:text-left"><strong>bruno.cabral.silva2018@gmail.com</strong></p>
        </div>
        <div className="flex flex-row w-full sm:w-20% justify-center sm:justify-end mt-4 sm:my-0">
          <a href="https://contate.me/brunoCabralSilva" target="_blank" rel="noreferrer">
            <i className="fa-brands px-3 pt-0 pb-2 fa-whatsapp text-lg text-black"></i>
          </a>
          <a href="https://www.linkedin.com/in/bruno-cabral-336076228/" target="_blank" rel="noreferrer">
            <i className="fa-brands px-3 pt-0 pb-2 fa-linkedin text-lg text-black"></i>
          </a>
          <a href="https://github.com/brunoCabralSilva" target="_blank" rel="noreferrer">
            <i className="fa-brands pl-3 pt-0 pr-2 pb-0 text-lg fa-github text-black"></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
