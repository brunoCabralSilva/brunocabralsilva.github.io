import React from 'react';
import Nav from '../components/Nav';

export default class NotFound extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <section className="h-screen">
        <div>
          <Nav color="" />
        </div>
        <section className="text-black pt-20">
          Not Found
        </section>
      </section >
    );
  };
}
