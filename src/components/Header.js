// import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="my-10 w-10/12 mx-auto flex justify-between items-center">
                <div>
                    <img src='./assets/svgs/logo.svg' alt="coffee logo" />
                </div>
                <div className="mylinks flex gap-6">
                    <h1>HOME</h1>
                    <h1>ABOUT US</h1>
                    <h1>CREATE YOUR PLAN</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;