import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isToggled, setToggle, children }) => {
    return (
      <AnimatePresence>
        Exemplo2
        {
          isToggled && (
          <>
            <motion.div>
              <motion.button
                onClick={() => setToggle(false)}
              >Close</motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  export default Modal;