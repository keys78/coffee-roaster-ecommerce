import { data, labels, questions } from "./data";
import { useState } from "react";

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

    return (
        <section>
            <div className="order-container">

                <div className="card-options">
                    {labels.map((label) => (
                        <div key={label.tag} onClick={ toggleChevron }>
                            <span className="number">{label.tag}</span>
                            <span className="title">{label.name}</span>
                        </div>
                    ))}
                </div>

                <div className="card-container">
                    <div className="flex justify-between items-center">
                        <h1>{questions.question1}</h1>
                        <img className={rotate ? 'yes' : 'no'} onClick={ toggleChevron } src='./assets/svgs/icon-arrow.svg' />
                    </div>
                   {isOpen && <div className="card-holder">
                        {data.map((preference) => (
                            (preference.category === 'preference' &&
                                <div key={preference.name} className="order-card" onClick={() => handleClick(preference.name)}>
                                    <h2>{preference.name}</h2>
                                    <p>{preference.desc}</p>
                                </div>)
                        ))}
                    </div> }

                    <h1>{questions.question2}</h1>
                    <div className="card-holder">
                        {data.map((beanType) => (
                            (beanType.category === 'bean-type' &&
                                <div key={beanType.name} className="order-card" onClick={() => handleClickType(beanType.name)}>
                                    <h2>{beanType.name}</h2>
                                    <p>{beanType.desc}</p>
                                </div>)
                        ))}
                    </div>




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