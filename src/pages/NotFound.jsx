import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class NotFound extends React.Component {
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
          Not Found
        </section>
        <Footer />
      </section >
    );
  }
}

export default NotFound;
