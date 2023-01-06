import { motion, AnimatePresence } from 'framer-motion';

interface ModalInterface {
  isToggled: boolean,
  setToggle: any,
  // children: any,
}

export default function Modal ({ isToggled, setToggle }: ModalInterface) {
    return (
      <AnimatePresence>
        Exemplo2
        {
          isToggled && (
          <div>
            <motion.div>
              <motion.button
                onClick={() => setToggle(false)}
              >
                Close
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }