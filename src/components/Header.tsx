import React from 'react';

interface HeaderProps {
  img: string,
}

export default class Header extends React.Component<HeaderProps, {}> {
  render() {
    const { img } = this.props;
    return(
      <main className="flex justify-center w-full">
        <img src={require(`../images/${img}`)} alt="imagem de Bruno" className="object-cover rounded-full border-6 border-white bg-heaven2 bg-center bg-cover z-30 absolute mt-15vh md:mt-20vh w-60 md:w-80 transition duration-1000" />
        <div className="md:h-50vh h-40vh w-full bg-gray-200 mb-20 md:mb-48">
          <img src={require('../images/heaven.jpg')} alt="imagem de Bruno" className="w-full h-full object-cover" />
        </div>
      </main>
    );
  }
}