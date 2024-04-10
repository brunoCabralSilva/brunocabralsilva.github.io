import React from 'react';
import portfolio from '../data/portfolio.json';
import Nav from '../components/Nav';
import Header from '../components/Header';
import { NewPort } from '../interfaces';
import { ImGithub, ImMenu } from "react-icons/im";
import { SiDocker, SiMongodb, SiNestjs, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaHeadphonesAlt, FaWolfPackBattalion, FaDiceD20, FaUserAlt, FaSun } from "react-icons/fa";
import { MdFastfood, MdCatchingPokemon } from "react-icons/md";
import { IoWalletOutline, IoCarSportSharp, IoLogoPython, IoLogoNodejs } from "react-icons/io5";
import { ImQuestion } from "react-icons/im";
import { TbTruckDelivery } from 'react-icons/tb';
import { BiFootball } from 'react-icons/bi';
import { GiAncientSword, GiLion, GiMagicBroom, GiOctopus } from 'react-icons/gi';
import { RiAdminFill } from 'react-icons/ri';
import { CgCardSpades } from 'react-icons/cg';
import { HiShoppingCart } from 'react-icons/hi';
import { AiFillCar } from 'react-icons/ai';
import { GrMysql, GrReactjs } from 'react-icons/gr';
import { IoMdPlanet } from 'react-icons/io';
import { MdOutlineViewCarousel } from 'react-icons/md';
import { TbBrandFramer } from 'react-icons/tb';

interface ProjectsProps {
  history: any,
};

export default class Projects extends React.Component<ProjectsProps, {}> {
  state = {
    newPort: [],
  }

  componentDidMount(): void {
    window.scrollTo(0, 0);
    const newPort: NewPort[] = portfolio.filter((port, index) => index !== 0);
    this.setState({ newPort: newPort });
  }

  returnIcon(text: string) {
    const classes = 'transition-text text-7xl text-center p-2 text-black transition duration-1000 z-30';
    switch(text) {
      case 'Wallet':
        return <IoWalletOutline className={classes} />;
      case 'Guia das Matilhas':
        return <FaWolfPackBattalion className={classes} />;
      case 'Pokedex':
        return <MdCatchingPokemon className={classes} />;
      case 'Recipes':
        return <MdFastfood className={classes} />;
      case 'Trivia':
        return <ImQuestion className={classes} />;
      case 'Tunes':
        return <FaHeadphonesAlt className={classes} />;
      case 'Github':
        return <ImGithub className={classes} />;
      case 'Delivery App':
        return <TbTruckDelivery className={classes} />
      case 'Dungeons Characters Guide':
        return <FaDiceD20 className={classes} />
      case 'Zoo-functions with NestJS':
        return <SiNestjs className={classes} />
      case 'Vehicles Mercado Livre':
        return <IoCarSportSharp className={classes} />
      case 'Employee Admin':
        return <FaUserAlt className={classes} />
      case 'Scrape Revelo Community BR':
        return <IoLogoPython className={classes} />
      case 'Border Tailwind':
        return <SiTailwindcss className={classes} />
      case 'Solar System':
        return <FaSun className={classes} />
      case 'Tryunfo':
        return <CgCardSpades className={classes} />
      case 'Online Store':
        return <HiShoppingCart className={classes} />
      case 'Cthulhu Mythos':
        return <GiOctopus className={classes} />
      case 'Car Shop':
        return <AiFillCar className={classes} />
      case 'MongoDB Commerce':
        return <SiMongodb className={classes} />
      case 'Store Manager':
        return <GrMysql className={classes} />
      case 'Talker Manager':
        return <GrMysql className={classes} />
      case 'Docker To do List':
        return <SiDocker className={classes} />
      case 'Star Wars Planet Search':
        return <IoMdPlanet className={classes} />
      case 'Zoo Functions':
        return <GiLion className={classes} />
      case 'Grid Tailwind':
        return <SiTailwindcss className={classes} />
      case 'Trybe Futebol Clube':
        return <BiFootball className={classes} />
      case 'FlexBox Tailwind':
        return <SiTailwindcss className={classes} />
      case 'Trybers and Dragons':
        return <GiAncientSword className={classes} />
      case 'Actors Adm':
        return <RiAdminFill className={classes} />
      case 'Trybesmith':
        return <SiTypescript className={classes} />
      case 'CRUD Node Mysql':
        return <GrMysql className={classes} />
      case 'Blogs API':
        return <IoLogoNodejs className={classes} />
      case 'Carousel React Tailwind':
        return <MdOutlineViewCarousel className={classes} />
      case 'React Graphics':
        return <GrReactjs className={classes} />
      case 'Menu':
        return <ImMenu className={classes} />
      case 'Context Project':
        return <FaSun className={classes} />
      case 'Transitions With Framer Motion':
        return <TbBrandFramer className={classes} />
      case 'Começando Node':
        return <IoLogoNodejs className={classes} />
      case 'Redux Básico':
        return <SiRedux className={classes} />
      case 'TrybeWarts':
        return <GiMagicBroom className={classes} />
      default: return '';
    }
  };

  render() {
    const { newPort } = this.state;
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
        <section className="relative">
          <p className="font-aboreto text-4xl sm:text-5xl pt-10 md:text-6xl md:pt-0 text-black w-full text-center z-50">PROJETOS</p>
          <p className="w-2/3 sm:w-1/3 text-center mx-auto mt-4 mb-14 sm:mb-0">
            Abaixo, é possível conhecer um pouco mais a respeito dos projetos dos quais já estive envolvido.
          </p>
        </section>
        <section className="pt-10 sm:pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-6 gap-3 mx-3">
          {
            newPort.map((port: NewPort) => (
              <a
                className="h-56 w-full bg-heaven2 bg-cover"
                href={ port.link }
                target="_blank"
                rel="noreferrer"
              >
                <div className="h-full w-full p-2 flex flex-col items-center justify-center hover:text-xl transition-all hover:text-black">
                  { this.returnIcon(port.text) }
                  <p className="mt-4 w-full text-center">{ port.text }</p>
                </div>
              </a>
            ))
          }
        </section>
      </section>
    );
  }
}