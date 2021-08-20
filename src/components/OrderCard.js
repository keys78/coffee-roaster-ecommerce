import PropTypes from 'prop-types'
import { useState } from 'react'
// import MyOrder from './MyOrder'

const OrderCard = ({ color, head_text, text }) => {
    const [card, setCard] = useState('')

    const handleClick = () => {
        setCard(head_text)
    }


    return <div
        onClick={() => handleClick()}
        style={{ backgroundColor: color }} className="order-card">
        <h1>{head_text}</h1>
        <p>{text}</p>

        {/* <MyOrder heado={card}/> */}
    </div>
    
}

OrderCard.propTypes = {
    text: PropTypes.string,
    head_text: PropTypes.string,
    color: PropTypes.string,
}
export default OrderCard;