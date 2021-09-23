import React from 'react'
import Button from './Button'

const SummaryModal = ({ price, setPrice, preference, setPreference, beanType, setBeanType, quantity, setQuantity,
    grind_option, setGrindOption, deliveries, setDeliveries, openModal, setOpenModal
}) => {


    function closeModal() {
        setOpenModal(!openModal)
        setPrice('______');
        setPreference('______');
        setBeanType('______');
        setQuantity('______');
        setGrindOption('______');
        setDeliveries('______')
    }

    return (
        <section className="mode fixed top-0 left-0 h-screen w-full">
            <div className="bg-black opacity-50 text-white p-20 fixed top-0 left-0 h-screen w-full">

            </div>
            <div className=" absolute top-10 text-black absolute top-0 w-full mx-auto">
                <div className="bg-white xl:w-4/12 lg:w-5/12 md:w-6/12 w-11/12 mx-auto sm:mt-8 mt-3 modal-container">
                    <div className="modal-header">Order Summary</div>
                    <div className="modal sm:px-10 px-4 py-10">
                        <h1>
                            “I drink my coffee as <span>{preference}</span>, with a <span>{beanType}</span> type of bean.
                            <span>{quantity}</span> ground ala <span>{grind_option}</span>, sent to me <span>{deliveries}</span>.”
                        </h1>

                        <h2>
                            Is this correct? You can proceed to checkout or go back to plan selection if something is off.
                            Subscription discount codes can also be redeemed at the checkout.
                        </h2>
                        <div className="flex justify-between items-center">
                            <h1 className="modal sm:block hidden">
                                ${price.toFixed(2)}/per mo
                            </h1>

                            <button className="order-btn sm:mx-0 mx-auto sm:block flex gap-3" onClick={closeModal}>
                                <h6>Checkout</h6>
                                <h6 className="sm:hidden block">${price.toFixed(2)}/per mo</h6>
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default SummaryModal
