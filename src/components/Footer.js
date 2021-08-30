import { NavLink } from 'react-router-dom'

const Footer = () => {

    return (
        <footer className="md:w-10/12 w-11/12 mx-auto mb-12">
            <div className="py-10 w-full px-4 sm:text-left text-center mx-auto flex xl:flex-row flex-col justify-between items-center">
                <div className="w-6/12 flex xl:flex-row flex-col items-center justify-between">
                    <div>
                        <img src='./assets/svgs/logo-white.svg' alt="coffee logo" />
                    </div>
                    <div className="mylinks flex sm:flex-row flex-col gap-4 xl:my-0 my-12">
                        <NavLink to="/" exact={true}><h1>HOME</h1></NavLink>
                        <NavLink to="/about"><h1>ABOUT US</h1></NavLink>
                        <NavLink to="/createyourplan"><h1>CREATE YOUR PLAN</h1></NavLink>
                    </div>
                </div>
                <div className="socials flex gap-6">
                    <img src='./assets/svgs/icon-facebook.svg' alt="icon-facebook" />
                    <img src='./assets/svgs/icon-twitter.svg' alt="icon-twitter" />
                    <img src='./assets/svgs/icon-instagram.svg' alt="icon-instagram" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;