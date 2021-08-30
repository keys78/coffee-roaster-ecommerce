import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <header>
            <div className="my-10 md:w-10/12 w-11/12 mx-auto flex justify-between items-center">
                <div>
                    <img src='./assets/svgs/logo.svg' alt="coffee logo" />
                </div>
                <div className="md:flex hidden mylinks flex gap-6">
                    <NavLink to="/" exact={true}><h1>HOME</h1></NavLink>
                    <NavLink to="/about"><h1>ABOUT US</h1></NavLink>
                    <NavLink to="/createyourplan"><h1>CREATE YOUR PLAN</h1></NavLink>
                </div>
                <div className="sidebar md:hidden flex cursor-pointer">
                    {isOpen && <img onClick={toggle} src='./assets/shared/mobile/icon-close.svg' alt="hamburger" />}
                    {!isOpen && <img onClick={toggle} src='./assets/shared/mobile/icon-hamburger.svg' alt="hamburger" />}
                </div>
            </div>

            {isOpen && <section className="sidebar md:hidden block">
                <div>
                    <NavLink to="/" exact={true}><h1>Home</h1></NavLink>
                    <NavLink to="/about"><h1>About us</h1></NavLink>
                    <NavLink to="/createyourplan"><h1>Create your plan</h1></NavLink>
                </div>
            </section>}

        </header>
    );
}

export default Header;