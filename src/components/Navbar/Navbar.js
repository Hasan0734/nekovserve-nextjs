import Image from "next/image";
import { useState } from "react";
import Logo from '../../assets/image/logo.webp'
import Twitter from '../../assets/image/icon/twitter--v1.png'
import Discord from '../../assets/image/icon/discord-logo.png'
import Instagram from '../../assets/image/icon/instagram-new.png'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light d-none d-md-block neko-nav" style={{position: 'fixed', paddingTop: '30px'}}>
                <div className="container">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarToggler">
                        <ul className="navbar-nav d-flex align-items-center justify-content-center mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="/">Story</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Whitepaper</a>
                            </li>
                            <li className="nav-item">
                                <a className href="/">
                                    <img src="/images/logo.webp" alt="" className="src mx-2 my-2" style={{ maxWidth: '300px' }} />
                                </a>
                            </li>
                            <li className="nav-item"><a className="nav-link text-white" href="/">FAQ</a></li>
                            <li className="nav-item">
                                <a className="nav-link text-white"  href="/">Tokenomics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Store</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="d-block d-lg-none mobile-menu">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <Image src={Logo} alt="" loading="lazy" />
                        </div>
                        <div className="menu">
                            <div onClick={() => setToggle(true)} className="icon"></div>
                        </div>
                    </div>
                </div>
                <div id="mobileMenu" className={`mobile-menu-expanded ${toggle ? 'show' : ''}`}>
                    {/* <!--show class add to mobile menu--> */}
                    <div onClick={() => setToggle(false)} className="close">
                        <div className="icon"></div>
                    </div>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Story</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Whitepaper</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="/">FAQ</a></li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Tokenomics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Store</a>
                        </li>
                        <li className="nav-item">
                            <div className="mt-5">
                                <div className="d-flex d-md-none justify-content-center join-to-us">
                                    <a href="#">Join Our Community</a>
                                </div>
                                <div className="social-contacts border-0">
                                    <a href="">
                                        <img className="me-2"
                                            src="/images/icon/twitter--v1.png"
                                            style={{ height: '30px' }} />

                                    </a>
                                    <a href="">
                                        <img className="me-2"
                                            src="/images/icon/twitter--v1.png"
                                            style={{ height: '30px' }} />

                                    </a>
                                    <a href="">
                                        <img className="me-2"
                                            src="/images/icon/instagram-new.png"
                                            style={{ height: '30px' }} />
                                    </a>
                                </div>

                            </div>
                        </li>


                    </ul>

                </div>
            </nav>


        </>
    );
};

export default Navbar;