import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-heaven bg-cover bg-center p-10 z-40 flex flex-col items-center w-full text-black">
        <p className="mt-1 sm:mt-0 text-center sm:text-left pl-4"><strong>© 2022 Copyright Bruno Cabral</strong></p>
        {/* <div>
          <p className="mt-1 sm:mt-0 text-center sm:text-left"><strong>bruno.cabral.silva2018@gmail.com</strong></p>
        </div> */}
        <div className="flex flex-row w-full justify-center mt-3">
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

export default Footer;
