import React from 'react';
import TechItem from './TechItem';

export default function Technologies() {
  const arrayTechnologies = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Motion', 'Tailwind', 'Docker', 'MySql', 'Node', 'MongoDB'];
  return (
    <section className="w-10/12 my-20">
      <p className="mb-2 md:text-left text-c pb-10 font-aboreto text-4xl sm:text-5xl md:text-6xl z-30">Tecnologias</p>
      <div className="flex flex-col md:flex-row flex-wrap w-full justify-center items-center md:justify-start">
        <div className="flex justify-center md:justify-end">
          <div className="flex flex-wrap sm:flex-row justify-center sm:justify-start items-center">
            {
              arrayTechnologies.map((tec, index) => (
                <TechItem key={ index } text={tec} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}