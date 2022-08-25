import React, { useEffect } from 'react';
import Nav from '../components/Nav';

export default function Projects() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
  return (
    <section>
      <div>
        <Nav />
      </div>
      <section>
        Projetos
      </section>
    </section >
  );
}