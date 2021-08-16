import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="my-10 w-10/12 mx-auto flex justify-between items-center">
                <div>
                    <img src='./assets/svgs/logo.svg' alt="coffee logo" />
                </div>
                <div className="mylinks flex gap-6">
                    <NavLink to="/" exact={true}><h1>HOME</h1></NavLink>
                    <NavLink to="/about"><h1>ABOUT US</h1></NavLink>
                    <NavLink to="/createyourplan"><h1>CREATE YOUR PLAN</h1></NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;