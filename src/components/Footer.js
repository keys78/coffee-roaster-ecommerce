const Footer = () => {


    return (
        <footer>
            <div className="py-10 w-10/12 mx-auto flex justify-between items-center">
                <div className="w-6/12 flex items-center justify-between">
                    <div>
                        <img src='./assets/svgs/logo-white.svg' alt="coffee logo" />
                    </div>
                    <div className="mylinks flex gap-4">
                        <h1>HOME</h1>
                        <h1>ABOUT US</h1>
                        <h1>CREATE YOUR PLAN</h1>
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