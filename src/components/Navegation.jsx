import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default class Navegation extends React.Component {
  render() {
    const { href, content, color } = this.props;
    return (
      <motion.li
        className={`text-center border-b-0 hover:border-b-2 transition durarion-1000 border-${color} z-40 mx-4 pb-1`}
      >
        <Link to={href} className={`no-underline text-${color}`}>
          <span className="w-full text-center">{content}</span>
        </Link>
      </motion.li>
    );
  }
}

