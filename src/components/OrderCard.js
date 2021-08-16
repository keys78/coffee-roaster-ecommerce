import PropTypes from 'prop-types'

const OrderCard = ({ color, head_text, text }) => {

    return <div style={{ backgroundColor: color }} className="card-component">
        <h1>{head_text}</h1>
        <p>{text}</p>
    </div>
}

OrderCard.propTypes = {
    text: PropTypes.string,
    head_text: PropTypes.string,
    color: PropTypes.string,
}
export default OrderCard;