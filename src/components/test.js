import { data, labels, questions, testQuestions } from "./data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SummaryModal from "./SummaryModal";

const Test = () => {
    const [preference, setPreference] = useState('______')
    const [beanType, setBeanType] = useState('______')
    const [quantity, setQuantity] = useState('______')
    const [grind_option, setGrindOption] = useState('______')
    const [deliveries, setDeliveries] = useState('______')

    const [price, setPrice] = useState(null)

    const [isOpen, setIsOpen] = useState(false)
    const [rotate, setRotate] = useState(false)
    const [openModal, setOpenModal] = useState()
    const [activeCard, SetActiveCard] = useState(false)



    const handleClick = value => {
        setPreference(value)
        SetActiveCard(!activeCard)

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

    const toggleChevron = () => {
        setIsOpen(!isOpen)
        setRotate(!rotate)
    }
    const toggleChevronB = () => {
        setIsOpen(true)
        setRotate(true)
    }

    const createOrder = () => {
        totalPrice();
        setOpenModal(!openModal)

    }
    const [activeIndex, setActiveIndex] = useState(null);
    const onQuestionClick = (index) => {
        setActiveIndex(index);
    };

    const renderedQuestions = testQuestions.map((test, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <div
                onClick={() => onQuestionClick(index)}
                className={`my__item ${active}`}
                key={test.question}
            >
                <div className="faq__question-container">
                    <h2 className="faq__question">{test.question1}</h2>
                    {/* <svg className="faq__arrow" width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd"/></svg> */}
                </div>
                <p className="answer">This is my answer</p>
            </div>
        );
    });

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

                {/* <div className="card-container"> */}
                    {/* <div className="Q1 border border-black">
                        <div onClick={toggleChevron} className="cursor-pointer mb-10 flex justify-between items-center">
                            <h1>{questions.question1}</h1>
                            <img className={rotate ? 'rotate' : 'reverse'} src='./assets/svgs/icon-arrow.svg' />
                        </div>
                        <AnimatePresence>
                            <div className="card-holder">
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
                            </div>
                        </AnimatePresence>
                    </div> */}

                    <div>
                        {renderedQuestions}
                    </div>



                    {/* <div className="summary mt-20">
                        <h1>ORDER SUMMARY</h1>
                        <h2>
                            “I drink my coffee as <span>{preference}</span>, with a <span>{beanType}</span> type of bean.
                            <span>{quantity}</span> ground ala <span>{grind_option}</span>, sent to me <span>{deliveries}</span>.”
                        </h2>
                    </div>

                    <div className="lg:text-right text-center mt-10">
                        <button className="order-btn" onClick={createOrder}>Create my plan</button>
                    </div> */}


                {/* </div> */}

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

export default Test;