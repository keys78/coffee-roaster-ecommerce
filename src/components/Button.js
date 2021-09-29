import PropTypes from 'prop-types'
import { motion } from "framer-motion";

const Button = ({ color, text, onClick, disabled }) => {

    return <motion.button
        onClick={onClick}
        disabled={disabled}
        whileHover={{ scale: 0.95 }} transiton={{ type: 'spring', stifness: 300 }}
        style={{ backgroundColor: color }} className={disabled ? 'disabled-global-btn' : 'global-btn'}>
        {text}
    </motion.button>
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}
export default Button;