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
          Not Found
        </section>
        <Footer />
      </section >
    );
  }
}

export default NotFound;
