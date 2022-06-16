import React from 'react';
import '../css/nav.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default class Navegation extends React.Component {
  render() {
    const { href, content } = this.props;
    return (
      <motion.li
        className="li-nav"
        whileHover={{ scale: 1.15, color: '#967854' }}
        transition={{ duration: 1 }}
      >
        <Link to={href} className="a-nav">
          <motion.span
            initial={{ color: 'black' }}
            animate={{ color: 'black' }}
            whileHover={{ scale: 1.15, color: '#5D4837' }}
            transition={{ duration: 1 }}
          >
            {content}
          </motion.span>
        </Link>
      </motion.li>
    );
  }
}

