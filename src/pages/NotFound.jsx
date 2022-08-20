import React from 'react';
import Nav from '../components/Nav';

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
      </section >
    );
  }
}

export default NotFound;
