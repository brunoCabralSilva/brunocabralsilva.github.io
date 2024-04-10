import React from 'react';
import Nav from '../components/Nav';

interface NotFoundProps {
  history: any,
}

export default class NotFound extends React.Component<NotFoundProps, {}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <section className="h-screen">
        <div>
        <Nav
          history={ this.props.history }
          img=""
          color=""
        />
        </div>
        <section className="text-black pt-20">
          Not Found
        </section>
      </section >
    );
  };
}
