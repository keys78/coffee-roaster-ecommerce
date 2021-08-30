import Footer from "./components/Footer"
import Header from "./components/Header"


const About = () => {
    return (
        <div>
            <Header />

            <section>
                <div className="md:w-10/12 w-11/12 mx-auto relative">
                    <picture>
                        <source media="(min-width:1024px)" className="rounded-2xl about-img" srcset="./assets/about/desktop/image-hero-whitecup.jpg" />
                        <source media="(min-width:440px)" className="rounded-2xl about-img" srcset="./assets/about/tablet/image-hero-whitecup.jpg" />
                        <img className="rounded-2xl about-img" src="./assets/about/mobile/image-hero-whitecup.jpg" alt="hero" />
                    </picture>
                    
                    <div className="absolute top-0 left-0 w-full">
                        <div className="md:w-10/12 w-11/12 mx-auto mt-32">
                            <div className="xl:w-6/12 lg:w-9/12 w-full hero-texts">
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
                <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto flex md:flex-row flex-col gap-12 items-center md:my-52 my-20">
                    <div>
                        <img className="rounded-2xl lg:max-w-md md:max-w-xs max-w-full" src="./assets/about/desktop/image-commitment.jpg" alt="image fot commitment" />
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
                <div className="md:w-10/12 w-11/12 mx-auto relative  md:mb-52 mb-28 mt-80">
                    <img className="rounded-2xl quality" src="./assets/about/desktop/bg-quality.png" alt="hero" />
                    <div className="absolute top-0 left-0 w-full">
                        <div className="md:w-10/12 w-11/12 mx-auto mt-32">
                            <div className="flex xl:flex-row flex-col-reverse justify-between items-start">
                                <div className="xl:w-5/12 w-full quality">
                                    <h1>Uncompromising quality</h1>
                                    <p className="pt-6 pb-16">Although we work with growers who pay close attention to all stages
                                        of harvest and processing, we employ, on our end, a rigorous quality control program to avoid
                                        over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch
                                        number. Our goal is to roast consistent,user-friendly coffee, so that brewing is easy and enjoyable.
                                    </p>
                                </div>
                                <div className="xl:w-5/12 w-full md:px-5 px-0 -mt-72">
                                    <img className="rounded-2xl h-96 coffee-tea" src="./assets/about/desktop/image-quality.jpg" alt="image-quality" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div className="how md:w-10/12 w-11/12 mx-auto mb-40">
                    <h1>Our headquaters</h1>

                    <div className="md:w-10/12 w-11/12">
                        <div className="flex justify-between md:flex-row flex-col items items-start">
                            <div className="how-options">
                                <img className="mx-auto" src="./assets/about/desktop/illustration-uk.svg" alt="uk image" />
                                <h2>United Kingdom</h2>
                                <h3>68 Asfordby Rd</h3>
                                <h3>Alcaston</h3>
                                <h3>SY6 1YA</h3>
                                <h3>+44 1241 918425</h3>
                            </div>

                            <div className="how-options">
                                <img className="mx-auto" src="./assets/about/desktop/illustration-canada.svg" alt="canada-image" />
                                <h2>Canada</h2>
                                <h3>1528 Eglinton Avenue</h3>
                                <h3>Toronto</h3>
                                <h3>Ontario M4P1A6</h3>
                                <h3>+1 416 485 2997</h3>
                            </div>

                            <div className="how-options">
                                <img className="mx-auto" src="./assets/about/desktop/illustration-australia.svg" alt="canada-image" />
                                <h2>Australia</h2>
                                <h3>36 Swanston Street</h3>
                                <h3>Kewell</h3>
                                <h3>Victoria</h3>
                                <h3>+61 4 9928 3629</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </div>
    );
}

export default About;