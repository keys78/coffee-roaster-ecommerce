import React from 'react'
import Button from './Button'

const SummaryModal = ({ preference, beanType, quantity, grind_option, deliveries, openModal, setOpenModal }) => {
    function closeModal() {
        setOpenModal(!openModal)
    }


    return (
        <section className="fixed top-0 left-0 h-screen w-full">
            <div className="bg-black opacity-50 text-white p-20 fixed top-0 left-0 h-screen w-full">
                <div className="relative mx-auto">

                </div>
            </div>
            <div className=" absolute top-10 text-black absolute top-0 w-full mx-auto">
                <div className="bg-white xl:w-4/12 lg:w-5/12 md:w-6/12 w-11/12 mx-auto mt-8 modal-container">
                    <div className="modal-header">Order Summary</div>
                    <div className="modal p-10">
                        <h1>
                            “I drink my coffee as <span>{preference}</span>, with a <span>{beanType}</span> type of bean.
                            <span>{quantity}</span> ground ala <span>{grind_option}</span>, sent to me <span>{deliveries}</span>.”
                        </h1>

                        <h2>
                            Is this correct? You can proceed to checkout or go back to plan selection if something is off.
                            Subscription discount codes can also be redeemed at the checkout.
                        </h2>
                        <div className="flex justify-between items-center">
                            <h1 className="modal">{quantity}/per mo</h1>
                            <Button  onClick={closeModal} text={'Checkout'}/>
                            <button  onClick={closeModal}>Checkout</button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default SummaryModal
