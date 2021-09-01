import PropTypes from 'prop-types'
import { useState } from 'react'
// import { preferences } from './data'


const OrderCard = ({ color}) => {
    const [card, setCard] = useState('')

    const handleClick = value => {
        setCard(value)
    }


    return (
        <div
            onClick={() => handleClick('yes')}
            style={{ backgroundColor: color }} className="order-card">
            <h1>{preferences.name}</h1>
            <p>{preferences.desc}</p>

        </div>
    );
}

OrderCard.propTypes = {
    text: PropTypes.string,
    head_text: PropTypes.string,
    color: PropTypes.string,
}
export default OrderCard;