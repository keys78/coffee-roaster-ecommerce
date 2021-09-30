import { data, labels, questions } from "./data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SummaryModal from "./SummaryModal";
import Button from "./Button";

const MyOrder = () => {
    const [preference, setPreference] = useState('______')
    const [beanType, setBeanType] = useState('______')
    const [quantity, setQuantity] = useState('______')
    const [grind_option, setGrindOption] = useState('______')
    const [deliveries, setDeliveries] = useState('______')

    const [price, setPrice] = useState(null)

    const [openModal, setOpenModal] = useState()
    // const [activeCard, SetActiveCard] = useState(false)



    const handleClick = value => {
        setPreference(value)
        // SetActiveCard(!activeCard)

    }
    const handleClickType = value => {
        setBeanType(value)
    }

    const handleClickQuantity = (quantity) => {
        setQuantity(quantity.name)
        setPrice(quantity.price)

    }

    function totalPrice() {
        let x = price;
        let y = deliveries;
        if (x === 7.2 && y === 'Every week') { setPrice(price * 4) }
        if (x === 7.2 && y === 'Every 2 weeks') { setPrice(19.2) }
        if (x === 7.2 && y === 'Every month') { setPrice(12) }
        if (x === 13.0 && y === 'Every week') { setPrice(price * 4) }
        if (x === 13.0 && y === 'Every 2 weeks') { setPrice(17.5 * 2) }
        if (x === 13.0 && y === 'Every month') { setPrice(22) }
        if (x === 22.0 && y === 'Every week') { setPrice(price * 4) }
        if (x === 22.0 && y === 'Every 2 weeks') { setPrice(32 * 2) }
        if (x === 22.0 && y === 'Every month') { setPrice(42) }
    }


    const handleClickGrind = value => {
        setGrindOption(value)
    }
    const handleClickDeliver = value => {
        setDeliveries(value)
    }

    const [isOpen, setIsOpen] = useState('')
    const [chevB, setChevB] = useState('')
    const [chevC, setChevC] = useState('')
    const [chevD, setChevD] = useState('')
    const [chevE, setChevE] = useState('')

    const active = isOpen ? 'active' : '';
    const active2 = chevB ? 'active' : '';
    const active3 = chevC ? 'active' : '';
    const active4 = chevD ? 'active' : '';
    const active5 = chevE ? 'active' : '';

    // toggleChevron
    const toggleChevron = () => { setIsOpen(!active) }
    const toggleChevron2 = () => { setChevB(!active2) }
    const toggleChevron3 = () => { setChevC(!active3) }
    const toggleChevron4 = () => { setChevD(!active4) }
    const toggleChevron5 = () => { setChevE(!active5) }



    // const toggleChevronB = () => {
    //     setIsOpen(true)
    //     setRotate(true)
    // }

    const createOrder = () => {
        totalPrice();
        setOpenModal(!openModal)

    }

    function checkForm() {
        if(preference && beanType && quantity && grind_option && deliveries === '______' ) {
            return true;
        } else {
            return false;
        }
        
    }

    return (
        <section>
            <div className="order-container">

                <div className="card-options lg:block hidden">
                    {labels.map((label) => (
                        <div key={label.tag} onClick={toggleChevron}>
                            <span className="number">{label.tag}</span>
                            <span className="title">{label.name}</span>
                        </div>
                    ))}
                </div>

                <div className="card-container">

                    <div onClick={() => toggleChevron()} className={`clicker ${active}`}>
                        <div className="cursor-pointer mb-10 flex justify-between items-center">
                            <h1>{questions.question1}</h1>
                            <img className={active ? 'rotate' : 'reverse'} src='./assets/svgs/icon-arrow.svg' />
                        </div>
                        <AnimatePresence>
                            {active && <motion.div className="answer"
                                initial={{ y: 300, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 300, opacity: 0 }}
                                transiton={{ type: 'spring', duration: 1 }}
                            >
                                <div className="card-holder">
                                    {data.map((preference) => (
                                        (preference.category === 'preference' &&
                                            <motion.div
                                                whileHover={{ scale: 0.97 }}
                                                key={preference.name} className="order-card" onClick={() => handleClick(preference.name)}>
                                                <h2>{preference.name}</h2>
                                                <p>{preference.desc}</p>
                                            </motion.div>
                                        )
                                    ))}
                                </div>
                            </motion.div>}
                        </AnimatePresence>
                    </div>

                    <div onClick={() => toggleChevron2()} className={`clicker ${active2}`}>
                        <div className="cursor-pointer mb-10 flex justify-between items-center">
                            <h1>{questions.question2}</h1>
                            <img className={active2 ? 'rotate' : 'reverse'} src='./assets/svgs/icon-arrow.svg' />
                        </div>
                        <AnimatePresence>
                            {active2 && <motion.div className="answer"
                                initial={{ y: 300, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 300, opacity: 0 }}
                                transiton={{ type: 'spring', duration: 0.2 }}
                            >
                                <div className="card-holder">
                                    {data.map((beanType) => (
                                        (beanType.category === 'bean-type' &&
                                            <motion.div
                                                whileHover={{ scale: 0.97 }}
                                                key={beanType.name} className="order-card" onClick={() => handleClickType(beanType.name)}>
                                                <h2>{beanType.name}</h2>
                                                <p>{beanType.desc}</p>
                                            </motion.div>

                                        )
                                    ))}
                                </div>
                            </motion.div>}
                        </AnimatePresence>
                    </div>

                    <div onClick={() => toggleChevron3()} className={`clicker ${active3}`}>
                        <div className="cursor-pointer mb-10 flex justify-between items-center">
                            <h1>{questions.question3}</h1>
                            <img className={active3 ? 'rotate' : 'reverse'} src='./assets/svgs/icon-arrow.svg' />
                        </div>
                        <AnimatePresence>
                            {active3 && <motion.div className="answer"
                                initial={{ y: 300, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 300, opacity: 0 }}
                                transiton={{ type: 'spring', duration: 0.2 }}
                            >
                                <div className="card-holder">
                                    {data.map((quantity) => (
                                        (quantity.category === 'quantity' &&
                                            <motion.div
                                                whileHover={{ scale: 0.97 }}
                                                key={quantity.name} className="order-card"
                                                onClick={() => handleClickQuantity(quantity)}>
                                                <h2>{quantity.name}</h2>
                                                <p>{quantity.desc}</p>
                                            </motion.div>

                                        )
                                    ))}
                                </div>
                            </motion.div>}
                        </AnimatePresence>
                    </div>

                    <div onClick={() => toggleChevron4()} className={`clicker ${active4}`}>
                        <div className="cursor-pointer mb-10 flex justify-between items-center">
                            <h1>{questions.question4}</h1>
                            <img className={active4 ? 'rotate' : 'reverse'} src='./assets/svgs/icon-arrow.svg' />
                        </div>
                        <AnimatePresence>
                            {active4 && <motion.div className="answer"
                                initial={{ y: 300, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 300, opacity: 0 }}
                                transiton={{ type: 'spring', duration: 0.2 }}
                            >
                                <div className="card-holder">
                                    {data.map((grind_option) => (
                                        (grind_option.category === 'grind-option' &&
                                            <motion.div
                                                whileHover={{ scale: 0.97 }}
                                                key={grind_option.name} className="order-card" onClick={() => handleClickGrind(grind_option.name)}>
                                                <h2>{grind_option.name}</h2>
                                                <p>{grind_option.desc}</p>
                                            </motion.div>

                                        )
                                    ))}
                                </div>
                            </motion.div>}
                        </AnimatePresence>
                    </div>

                    <div onClick={() => toggleChevron5()} className={`clicker ${active5}`}>
                        <div className="cursor-pointer mb-10 flex justify-between items-center">
                            <h1>{questions.question5}</h1>
                            <img className={active5 ? 'rotate' : 'reverse'} src='./assets/svgs/icon-arrow.svg' />
                        </div>
                        <AnimatePresence>
                            {active5 && <motion.div className="answer"
                                initial={{ y: 300, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 300, opacity: 0 }}
                                transiton={{ type: 'spring', duration: 0.2 }}
                            >
                                <div className="card-holder">
                                    {data.map((deliveries) => (
                                        (deliveries.category === 'deliveries' &&
                                            <motion.div
                                                whileHover={{ scale: 0.97 }}
                                                key={deliveries.name} className="order-card" onClick={() => handleClickDeliver(deliveries.name)}>
                                                <h2>{deliveries.name}</h2>
                                                <p>{deliveries.desc}</p>
                                            </motion.div>
                                        )
                                    ))}
                                </div>
                            </motion.div>}
                        </AnimatePresence>
                    </div>




                    <div className="summary mt-20">
                        <h1>ORDER SUMMARY</h1>
                        <h2>
                            “I drink my coffee as <span>{preference}</span>, with a <span>{beanType}</span> type of bean.
                            <span>{quantity}</span> ground ala <span>{grind_option}</span>, sent to me <span>{deliveries}</span>.”
                        </h2>
                    </div>

                    <div className="lg:text-right text-center mt-10">
                        <Button onClick={createOrder} text={'Create my plan'} disabled={checkForm()}/>

                    </div>


                </div>

            </div>
            {openModal && <SummaryModal price={price} setPrice={setPrice}
                preference={preference} setPreference={setPreference}
                beanType={beanType} setBeanType={setBeanType}
                quantity={quantity} setQuantity={setQuantity}
                grind_option={grind_option} setGrindOption={setGrindOption}
                deliveries={deliveries} setDeliveries={setDeliveries}
                openModal={openModal}
                setOpenModal={setOpenModal}
            />}
        </section>


    );
}

export default MyOrder;