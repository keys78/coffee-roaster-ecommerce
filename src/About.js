import Button from "./components/Button"
import Footer from "./components/Footer"
import Header from "./components/Header"


const About = () => {
    return (
        <div>
            <Header />

            <section>
                <div className="w-10/12 mx-auto relative">
                    <img className="rounded-2xl about-img" src="./assets/about/desktop/image-hero-whitecup.jpg" alt="hero" />
                    <div className="absolute top-0 left-0 w-full">
                        <div className="w-10/12 mx-auto mt-32">
                            <div className="w-6/12 hero-texts">
                                <h1>About us</h1>
                                <p className="pt-6 pb-16">Coffeeroasters began its journey of exotic discovery in 1999,
                                    highlighting stories of coffee from around the world. We have since been dedicated to
                                    bring the perfect cup - from bean to brew - in every shipment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-9/12 mx-auto flex gap-12 items-center my-52">
                    <div>
                        <img className="rounded-2xl max-w-md" src="./assets/about/desktop/image-commitment.jpg" alt="image fot commitment" />
                    </div>
                    <div className="commitment">
                        <h1>Our commitment</h1>
                        <p>We’re built on a simple mission and a commitment to doing good along the way.
                            We want to make it easy for you to discover and brew the world’s best coffee at home.
                            It all starts at the source. To locate the specific lots we want to purchase,
                            we travel nearly 60 days a year trying to understand the challenges and opportunities in
                            each of these places. We collaborate with exceptional coffee growers and empower a global
                            community of farmers through with well above fair-trade benchmarks. We also offer training,
                            support farm community initiatives, and invest in coffee plant science. Curating only the
                            finest blends, we roast each lot to highlight tasting profiles distinctive to their native
                            growing region.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-10/12 mx-auto relative">
                    <img className="rounded-2xl" src="./assets/about/desktop/bg-quality.png" alt="hero" />
                    <div className="absolute top-0 left-0 w-full">
                        <div className="w-10/12 mx-auto mt-32">
                            <div className="w-6/12 quality">
                                <h1>Uncompromising quality</h1>
                                <p className="pt-6 pb-16">Although we work with growers who pay close attention to all stages
                                    of harvest and processing, we employ, on our end, a rigorous quality control program to avoid
                                    over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch
                                    number. Our goal is to roast consistent,user-friendly coffee, so that brewing is easy and enjoyable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* <section>
                <div className="how w-10/12 mx-auto mb-60 mt-96">
                    <h1>How it works</h1>

                    <div className="relative my-12 circles w-9/12 flex justify-between items-center">
                        <h2></h2>
                        <h2></h2>
                        <h2></h2>
                        <h3 className="w-full absolute top-3 left-0"></h3>
                    </div>

                    <div className="flex justify-between items items-start">
                        <div className="how-options">
                            <h1>01</h1>
                            <h2>Pick your coffee</h2>
                            <p>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them.
                                There are new coffees in all profiles every month for you to try out.
                            </p>
                        </div>

                        <div className="how-options">
                            <h1>02</h1>
                            <h2>Choose the frequency</h2>
                            <p>Customize your order frequency, quantity, even your roast style and grind type.
                                Pause, skip or cancel your subscription with no commitment through our online portal.
                            </p>
                        </div>

                        <div className="how-options">
                            <h1>03</h1>
                            <h2>Recieve and enjoy!</h2>
                            <p>We ship your package within 48 hours, freshly roasted.
                                Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.
                            </p>
                        </div>
                    </div>

                    <div className="my-32">
                        <Button text={'Create your plan'} />
                    </div>

                </div>



            </section> */}












            <Footer />
        </div>
    );
}

export default About;