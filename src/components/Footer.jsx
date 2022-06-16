import React from 'react';
import '../css/footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p className="paragraph-footer"><strong>© 2022 Copyright</strong></p>
        <div>
          <p className="paragraph-footer">Feito e atualizado por <strong>Bruno Gabryell Cabral da Silva</strong></p>
          <p className="paragraph-footer">com <strong>HTML</strong>, <strong>CSS</strong>, <strong>Javascript</strong>, <strong>React</strong> e <strong>Framer Motion</strong></p>
        </div>
      </footer>
    );
  }
}

export default Footer;
