import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default class Navegation extends React.Component {
  render() {
    const { href, content } = this.props;
    return (
      <motion.li
        className="text-center hover:border-b-2 transition durarion-1000 border-black px-4"
      >
        <Link to={href} className="no-underline">
          {content}
        </Link>
      </motion.li>
    );
  }
}

