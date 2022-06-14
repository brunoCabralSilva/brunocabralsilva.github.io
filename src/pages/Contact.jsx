import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Contact extends React.Component {
  render() {
    return (
      <section>
        <div>
          <Nav />
        </div>
        <section>
          <img
            src={require("../images/software-developer.png")}
            className="img-background-computer"
            alt="imagem de computador"
          />
          Contato
        </section>
        <Footer />
      </section >
    );
  }
}

export default Contact;
