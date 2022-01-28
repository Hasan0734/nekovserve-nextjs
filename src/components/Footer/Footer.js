
const Footer = () => {
    return (
        <>
           <footer className="footer-sec">
        <div className="container">
          <div className="
                d-flex
                justify-content-between
                align-items-center
                footer-first-line
              ">
            <a className="logo" href="/">
              <img src="/images/logo.webp" alt="" />
            </a>
          </div>
          <div className="
                d-flex
                justify-content-between
                align-items-center
                footer-second-line
              ">
            <div className="d-flex d-md-none justify-content-center join-to-us">
              <a href="#">Join Our Community</a>
            </div>
            <div className="social-contacts">
              <a href="https://twitter.com/Nekoverse_NFT"><img className="me-2" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/twitter--v1.png" style={{height: '30px'}} /></a>
              <a href="https://discord.gg/nekoverse"><img className="me-2" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/discord-logo.png" style={{height: '30px'}} /></a>
              <a href="https://www.instagram.com/nekoverse.nft/"><img className="me-2" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/instagram-new.png" style={{height: '30px'}} /></a>
            </div>
            <ul className="footer-menu">
              <li className="menu-item"><a href="#">Terms of Service</a></li>
              <li className="menu-item"><a href="#">Privacy Policy</a></li>
              <li className="menu-item"><a href="#">Help</a></li>
              <li className="menu-item">
                <a href="#">User Generated Content Policies</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
        </>
    );
};

export default Footer;