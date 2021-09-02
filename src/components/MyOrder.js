import { data, labels, questions } from "./data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const MyOrder = () => {
    const [preference, SetPreference] = useState('______')
    const [beanType, SetBeanType] = useState('______')
    const [quantity, SetQuantity] = useState('______')
    const [grind_option, SetGrindOption] = useState('______')
    const [deliveries, SetDeliveries] = useState('______')

    const [isOpen, setIsOpen] = useState(false)
    const [rotate, setRotate] = useState(false)
    // const [activeCard, SetActiveCard] = useState(null)

    const handleClick = value => {
        SetPreference(value)
    }
    const handleClickType = value => {
        SetBeanType(value)
    }
    const handleClickQuantity = value => {
        SetQuantity(value)
    }
    const handleClickGrind = value => {
        SetGrindOption(value)
    }
    const handleClickDeliver = value => {
        SetDeliveries(value)
    }

    const toggleChevron = () => {
        setIsOpen(!isOpen)
        setRotate(!rotate)
    }
    const toggleChevronB = () => {
        setIsOpen(true)
        setRotate(true)
    }

    return (
        <section>
            <div className="order-container">

                <div className="card-options lg:block hidden">
                    {labels.map((label) => (
                        <div key={label.tag} onClick={toggleChevronB}>
                            <span className="number">{label.tag}</span>
                            <span className="title">{label.name}</span>
                        </div>
                    ))}
                </div>

                <div className="card-container">
                    <div onClick={toggleChevron} className="cursor-pointer mb-10 flex justify-between items-center">
                        <h1>{questions.question1}</h1>
                        <img className={rotate ? 'rotate' : 'reverse'} src='./assets/svgs/icon-arrow.svg' />
                    </div>
                    <AnimatePresence>
                        {isOpen && <div className="card-holder">
                            {data.map((preference) => (
                                (preference.category === 'preference' &&
                                    <motion.div
                                        initial={{ y: 300, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 300, opacity: 0 }}
                                        whileHover={{ scale: 0.97 }}
                                        transiton={{ type: 'spring', duration: 0.2 }}
                                        key={preference.name} className="order-card" onClick={() => handleClick(preference.name)}>
                                        <h2>{preference.name}</h2>
                                        <p>{preference.desc}</p>
                                    </motion.div>

                                )
                            ))}
                        </div>}
                    </AnimatePresence>


                    <div onClick={toggleChevron} className="cursor-pointer mb-10 flex justify-between items-center">
                        <h1>{questions.question2}</h1>
                        <img className={rotate ? 'rotate' : 'reverse'} src='./assets/svgs/icon-arrow.svg' />
                    </div>
                    <AnimatePresence>
                        {isOpen && <div className="card-holder">
                            {data.map((beanType) => (
                                (beanType.category === 'bean-type' &&
                                    <motion.div
                                        initial={{ y: 300, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 300, opacity: 0 }}
                                        whileHover={{ scale: 0.97 }}
                                        transiton={{ type: 'spring', duration: 0.2 }}
                                        key={beanType.name} className="order-card" onClick={() => handleClickType(beanType.name)}>
                                        <h2>{beanType.name}</h2>
                                        <p>{beanType.desc}</p>
                                    </motion.div>

                                )
                            ))}
                        </div>}
                    </AnimatePresence>

                    <div onClick={toggleChevron} className="cursor-pointer mb-10 flex justify-between items-center">
                        <h1>{questions.question3}</h1>
                        <img className={rotate ? 'rotate' : 'reverse'} src='./assets/svgs/icon-arrow.svg' />
                    </div>
                    <AnimatePresence>
                        {isOpen && <div className="card-holder">
                            {data.map((quantity) => (
                                (quantity.category === 'quantity' &&
                                    <motion.div
                                        initial={{ y: 300, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 300, opacity: 0 }}
                                        whileHover={{ scale: 0.97 }}
                                        transiton={{ type: 'spring', duration: 0.2 }}
                                        key={quantity.name} className="order-card" onClick={() => handleClickQuantity(quantity.name)}>
                                        <h2>{quantity.name}</h2>
                                        <p>{quantity.desc}</p>
                                    </motion.div>

                                )
                            ))}
                        </div>}
                    </AnimatePresence>

                    <div onClick={toggleChevron} className="cursor-pointer mb-10 flex justify-between items-center">
                        <h1>{questions.question4}</h1>
                        <img className={rotate ? 'rotate' : 'reverse'} src='./assets/svgs/icon-arrow.svg' />
                    </div>
                    <AnimatePresence>
                        {isOpen && <div className="card-holder">
                            {data.map((grind_option) => (
                                (grind_option.category === 'grind-option' &&
                                    <motion.div
                                        initial={{ y: 300, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 300, opacity: 0 }}
                                        whileHover={{ scale: 0.97 }}
                                        transiton={{ type: 'spring', duration: 0.2 }}
                                        key={grind_option.name} className="order-card" onClick={() => handleClickGrind(grind_option.name)}>
                                        <h2>{grind_option.name}</h2>
                                        <p>{grind_option.desc}</p>
                                    </motion.div>

                                )
                            ))}
                        </div>}
                    </AnimatePresence>

                    <div onClick={toggleChevron} className="cursor-pointer mb-10 flex justify-between items-center">
                        <h1>{questions.question5}</h1>
                        <img className={rotate ? 'rotate' : 'reverse'} src='./assets/svgs/icon-arrow.svg' />
                    </div>
                    <AnimatePresence>
                        {isOpen && <div className="card-holder">
                            {data.map((deliveries) => (
                                (deliveries.category === 'deliveries' &&
                                    <motion.div
                                        initial={{ y: 300, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 300, opacity: 0 }}
                                        whileHover={{ scale: 0.97 }}
                                        transiton={{ type: 'spring', duration: 0.2 }}
                                        key={deliveries.name} className="order-card" onClick={() => handleClickDeliver(deliveries.name)}>
                                        <h2>{deliveries.name}</h2>
                                        <p>{deliveries.desc}</p>
                                    </motion.div>

                                )
                            ))}
                        </div>}
                    </AnimatePresence>




                    <div className="summary mt-20">
                        <h1>ORDER SUMMARY</h1>
                        <h2>
                            “I drink my coffee as <span>{preference}</span>, with a <span>{beanType}</span> type of bean. 
                             <span>{quantity}</span> ground ala <span>{grind_option}</span>, sent to me <span>{deliveries}</span>.”
                        </h2>
                    </div>

                    <div className="lg:text-right text-center mt-10">
                        <Button onClick={() => alert('Order Created')} text={'Create my plan'} />
                    </div>
                </div>

            </div>
        </section>


    );
}

export default MyOrder;