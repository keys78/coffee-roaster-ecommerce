import Button from "./components/Button"
import Footer from "./components/Footer"
import Header from "./components/Header"


const Home = () => {
    return (
        <div>
            <Header />

            <section>
                <div className="w-10/12 mx-auto relative">
                    <img className="rounded-2xl" src="./assets/home/desktop/image-hero-coffeepress.jpg" alt="hero" />
                    <div className="absolute top-0 left-0 w-full">
                        <div className="w-10/12 mx-auto mt-20">
                            <div className="w-6/12 hero-texts">
                                <h1>Great coffee made simple.</h1>
                                <p className="pt-6 pb-16">Start your mornings with the world’s best coffees.
                                    Try our expertly curated artisan coffees from our best roasters delivered
                                    directly to your door, at your schedule.
                                </p>
                                <Button text={'Create your plan'} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-10/12 pl-8 mx-auto my-52">
                    <h1 className="collection-head ml-8">our collection</h1>
                    <div className="collections flex -mt-24">
                        <div>
                            <img src="./assets/home/desktop/image-gran-espresso.png" alt="expresso" />
                            <h1>Gran Espresso</h1>
                            <p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
                        </div>

                        <div>
                            <img src="./assets/home/desktop/image-planalto.png" alt="planalto" />
                            <h1>Planalto</h1>
                            <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                        </div>

                        <div>
                            <img src="./assets/home/desktop/image-piccollo.png" alt="picollo" />
                            <h1>Piccollo</h1>
                            <p>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                        </div>

                        <div>
                            <img src="./assets/home/desktop/image-danche.png" alt="danche" />
                            <h1>Danche</h1>
                            <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div>
                    <div className="why-us w-10/12 mx-auto rounded-2xl">
                        <div className="w-4/12 mx-auto text-center">
                            <h1>Why choose us?</h1>
                            <p>A large part of our role is choosing which particular coffees will be featured in our range.
                                This means working closely with the best coffee growers to give you a more impactful experience
                                on every level.
                            </p>
                        </div>

                        <div className="flex items-center gap-10 w-9/12 mx-auto">
                            <div className="card">
                                <img className="mx-auto py-8" src="./assets/home/desktop/icon-coffee-bean.svg" alt="coffee bean" />
                                <div className="py-8">
                                    <h1>Best quality</h1>
                                    <p>Discover an endless variety of the world’s best
                                        artisan coffee from each of our roasters.
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="mx-auto py-8" src="./assets/home/desktop/icon-gift.svg" alt="coffee bean" />
                                <div className="py-8">
                                    <h1>Exclusive benefits</h1>
                                    <p>Special offers and swag when you subscribe,
                                        including 30% off your first shipment.
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="mx-auto p-8 " src="./assets/home/desktop/icon-truck.svg" alt="coffee bean" />
                                <div className="py-8 mt-5">
                                    <h1>Free Shipping</h1>
                                    <p>We cover the cost and coffee is delivered fast.
                                        Peak freshness: guaranteed.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="how w-10/12 mx-auto mb-60 mt-96">
                    <h1>How it works</h1>

                    <div className="relative my-12 circles w-9/12 flex justify-between items-center">
                        <h2></h2>
                        <h2></h2>
                        <h2></h2>
                        <h3 className="w-full absolute top-3 left-0"></h3>
                    </div>

                    <div className="flex justify-between items items-start">
                        <div className="how-options ">
                            <h1>01</h1>
                            <h2>Pick your coffee</h2>
                            <p className="pr-16">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them.
                                There are new coffees in all profiles every month for you to try out.
                            </p>
                        </div>

                        <div className="how-options">
                            <h1>02</h1>
                            <h2>Choose the frequency</h2>
                            <p className="pr-16">Customize your order frequency, quantity, even your roast style and grind type.
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

            </section>

            <Footer />
        </div>
    );
}

export default Home;