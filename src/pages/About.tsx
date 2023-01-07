import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Slider from '../components/Slider';
import academics from '../data/academics.json';
import professional from '../data/professional.json';

interface AboutProps {
  history: any,
}

export default class About extends React.Component<AboutProps, { }> {
  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <Nav
          history={ this.props.history }
          img=""
          color="white"
        />
        <Header img="me2.jpg" />
        <section className="relative">
          <p className="font-aboreto text-4xl sm:text-5xl pt-10 md:text-6xl md:pt-0 text-black w-full text-center z-50">SOBRE MIM</p>
          <p className="w-2/3 sm:w-1/3 text-center mx-auto mt-4 mb-14 sm:mb-0">
            Abaixo, é possível conhecer um pouco mais a respeito das minhas experiências acadêmicas e profissionais. Basta clicar em um dos cards para obter mais detalhes.
          </p>
        </section>
        <p className="font-aboreto text-4xl sm:text-5xl text-center md:pt-20 md:pb-10 text-black z-50 lg:pl-6 px-3">
          O que estudei até aqui?
        </p>
        <Slider
          history={ this.props.history }
          type="academics"
          array={ academics }
        />
        <p className="font-aboreto text-4xl sm:text-5xl text-center pt-8 pb-3 md:mb-10 text-black z-50 lg:pl-6 px-3">
          Onde trabalhei até aqui?
        </p>
        <Slider
          history={ this.props.history }
          type="professional"
          array={ professional }
        />
      </div>
    );
  };
}
