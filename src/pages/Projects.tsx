import React from 'react';
import portfolio from '../data/portfolio.json';
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillCloseCircle } from 'react-icons/ai';
import Nav from '../components/Nav';
import Header from '../components/Header';
import { NewPort } from '../interfaces';

interface ProjectsProps {
  history: any,
};

interface ProjectState {

};

export default class Projects extends React.Component<ProjectsProps, ProjectState> {
  state = {
    isToggled: false,
    object: {
      link: '',
      grid: '',
      text: '',
      favorito: false,
      image: '',
    },
    newPort: [],
  }

  componentDidMount(): void {
    window.scrollTo(0, 0);
    const newPort: NewPort[] = portfolio.filter((port, index) => index !== 0);
    this.setState({ newPort: newPort });
  }


  render() {
    const { newPort, object, isToggled } = this.state;
    return (
      <section>
        <Nav
          history={ this.props.history }
          img=""
          color="white"
        />
        <Header
          img="me2.jpg"
        />
        <section className="pt-10 sm:pt-20 flex flex-row flex-wrap items-center w-full my-10">
          {
            newPort.map((port: NewPort) => (
              <div className="h-90 w-1/3">
                <div
                  onClick={
                    () => this.setState( {isToggled: !isToggled} )
                  }
                  className="h-90 w-full p-2"
                >
                  <p>{ port.text }</p>
                  <img
                    src={require(`../images/projects/${port.image}`)}
                    className="h-56 w-full object-cover"
                    onClick={() => {
                      this.setState({
                        isToggled: !isToggled,
                        object: port,
                      })
                    }}
                    alt="" />
                </div>
              </div>
            ))
          }
        </section>
        <AnimatePresence>
          {
            object.text !== '' &&
            object.image !== '' &&
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              className="fixed top-0 w-full h-screen flex items-center justify-center bg-dark-transp z-50"
            >
              <div className="w-11/12 h-11/12 flex items-center justify-center relative">
                <h2>{object.text}</h2>
                <button className="text-5xl fixed top-10 right-5 sm:right-20 sm:top-14 color-white z-50"
                  onClick={ () => this.setState({ object: {
                    link: '',
                    grid: '',
                    text: '',
                    favorito: false,
                    image: '',
                  }, }) }
                >
                  <AiFillCloseCircle className="" />
                </button>
                <motion.img
                  src={require(`../images/projects/${object.image}`)}
                  className="h-90vh w-full object-cover absolute"
                  alt="" />
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </section >
    );
  }
}