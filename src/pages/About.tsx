import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';

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
          Nascido em Campina Grande, segunda maior cidade da Paraíba, desde cedo carrego a dedicação em me qualificar no mercado de trabalho. Apaixonado por RPG e Nordeste, amante da tecnologia e estudante de Desenvolvimento Web na Trybe!
          </p>
        </section>
        <div className="p-4 mx-auto h-96 w-60 flex flex-row">
            <div className="rounded-xl flex z-50 w-1/2 h-full items-center justify-center">
              <img
                src={require('../images/h2.png')}
                alt=""
                className="rounded-xl object-cover object-bottom opacity-50"
              />
              <p className="w-full mx-auto py-3 font-bold text-center">
                
              </p>
            </div>
            <img
              src={require('../images/works-academy/eter.jpg')}
              className="rounded-xl ml-3 h-full w-1/2 object-cover"
              alt=""
            />
        </div>
        {/* <Slider type = "academics" array ={ academics } />
        <Slider type = "professional" array ={ professional } /> */}
      </div>
    );
  };
}
