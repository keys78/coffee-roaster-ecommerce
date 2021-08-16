// import Button from "./components/Button"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MyOrder from "./components/MyOrder"


const CreateYourPlan = () => {
    return (
        <div>
            <Header />

            <section>
                <div className="w-10/12 mx-auto relative">
                    <img className="rounded-2xl plan-img" src="./assets/plan/desktop/image-hero-blackcup.jpg" alt="hero" />
                    <div className="absolute top-0 left-0 w-full">
                        <div className="w-10/12 mx-auto mt-32">
                            <div className="w-6/12 hero-texts">
                                <h1>Create a plan</h1>
                                <p className="pt-6 pb-16">Build a subscription plan that best fits your needs.
                                    We offer an assortment of the best artisan coffees from around the globe delivered
                                    fresh to your door.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div className="w-10/12 mx-auto relative  mb-52 mt-40">
                    <img className="rounded-2xl plan-quality" src="./assets/about/desktop/bg-quality.png" alt="plan-quality" />
                    <div className="absolute top-0 left-0 w-full">
                        <div className="w-10/12 mx-auto mt-24">
                            <div className="relative my-12 circles-2 w-9/12 flex justify-between items-center">
                                <h2></h2>
                                <h2></h2>
                                <h2></h2>
                                <h3 className="absolute top-3 left-3"></h3>
                            </div>

                            <div className="flex justify-between items items-start">
                                <div className="plan-options ">
                                    <h1>01</h1>
                                    <h2>Pick your <br /> coffee</h2>
                                    <p className="pr-16">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them.
                                        There are new coffees in all profiles every month for you to try out.
                                    </p>
                                </div>

                                <div className="plan-options">
                                    <h1>02</h1>
                                    <h2>Choose the frequency</h2>
                                    <p className="pr-16">Customize your order frequency, quantity, even your roast style and grind type.
                                        Pause, skip or cancel your subscription with no commitment through our online portal.
                                    </p>
                                </div>

                                <div className="plan-options">
                                    <h1>03</h1>
                                    <h2>Recieve and enjoy!</h2>
                                    <p>We ship your package within 48 hours, freshly roasted.
                                        Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-80 w-10/12 mx-auto">


            <MyOrder />



            </div>


            <Footer />
        </div>
    );
}

export default CreateYourPlan;