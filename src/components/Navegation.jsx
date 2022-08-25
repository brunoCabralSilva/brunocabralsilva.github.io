import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navegation(props) {
  const { href, content, color } = props;
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

Navegation.propTypes = {
  href: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

