import { data, labels, questions } from "./data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MyOrder = () => {
    const [preference, SetPreference] = useState('.......')
    const [beanType, SetBeanType] = useState('.......')
    const [isOpen, setIsOpen] = useState(false)
    const [rotate, setRotate] = useState(false)
    // const [activeCard, SetActiveCard] = useState(null)

    const handleClick = value => {
        SetPreference(value)
    }
    const handleClickType = value => {
        SetBeanType(value)
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

                <div className="card-options">
                    {labels.map((label) => (
                        <div key={label.tag} onClick={toggleChevronB}>
                            <span className="number">{label.tag}</span>
                            <span className="title">{label.name}</span>
                        </div>
                    ))}
                </div>

                <div className="card-container">
                    <div onClick={toggleChevron} className="cursor-pointer flex justify-between items-center">
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


                    <div onClick={toggleChevron} className="cursor-pointer flex justify-between items-center">
                        <h1>{questions.question1}</h1>
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













                    {/* <h1>{questions.question2}</h1>
                    <div className="card-holder">
                        {data.map((beanType) => (
                            (beanType.category === 'bean-type' &&
                                <div >
                                    <h2>{beanType.name}</h2>
                                    <p>{beanType.desc}</p>
                                </div>)
                        ))}
                    </div> */}




                    <div >
                        <h1>summary</h1>
                        <p>{preference}</p>
                        <p>{beanType}</p>
                    </div>
                </div>

            </div>
        </section>


    );
}

export default MyOrder;