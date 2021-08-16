import PropTypes from 'prop-types'
import { motion } from "framer-motion";

const Button = ({ color, text }) => {

    return <motion.button
        whileHover={{ scale: 0.95 }} transiton={{ type: 'spring', stifness: 300 }}
        style={{ backgroundColor: color }} className="global-btn">
        {text}
    </motion.button>
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}
export default Button;