import { data, labels, questions } from "./data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SummaryModal from "./SummaryModal";

const Orderie = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const onQuestionClick = (index) => {
        setActiveIndex(index);
    };


    const renderedFaqs = data.map((faq, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            faq.category === 'quantity' &&
            <div
                onClick={() => onQuestionClick(index)}
                className={`faq__item ${active}`}
                key={faq.index}
            >
                <div className="faq__question-container">
                    <h2 className="faq__question">{faq.name}</h2>
                   
                    {/* <svg className="faq__arrow" width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd"/></svg> */}
                </div>
                <h2 className="faq__answer">{faq.desc}</h2>
            </div>
        );
    });

    return (
        <div className="faq__content">
            <h1 className="faq__heading">FAQ</h1>
            <div className="faq__items">
                {renderedFaqs}
            </div>
        </div>
    );
};

export default Orderie;