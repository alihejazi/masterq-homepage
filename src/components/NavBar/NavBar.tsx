import { AiFillCaretDown, AiFillCaretRight, AiOutlineMenu } from "react-icons/ai";
import Button from "../Button/Button";
import logo from "../../assets/logo.svg";
import logoWhite from "../../assets/logoWhite.svg";
import { ImCross } from "react-icons/im";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {

  const menuOpenButtonClicked = (e: any) => {
    const navLinks = document.querySelector(".nav-links") as HTMLDivElement;
    if (navLinks) {
      (navLinks as HTMLDivElement).style.left = "0px";
    }
  };

  const menuCloseButtonClicked = (e: any) => {
    const navLinks = document.querySelector(".nav-links") as HTMLDivElement;
    
    if (navLinks) {
      (navLinks as HTMLDivElement).style.left = "-100%";
    }
  };

  // This method is only called for menu links which navigate to an anchored id (#), because those will naturally not close the menu,
  // whereas menu links which link to another page WILL close the menu automatically
  const closeMobileMenuIfOpen = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const navLinks = document.querySelector(".nav-links") as HTMLDivElement;
    if (navLinks &&  (navLinks as HTMLDivElement).style.left === "0px") {
      (navLinks as HTMLDivElement).style.left = "-100%";
    }
  }

  // const subMenu1Clicked = (e: any) => {
  //     navLinks.classList.toggle("show1");
  // }

  // const subSubMenu1Clicked = (e: any) => {
  //     navLinks.classList.toggle("show2");
  // }

  // const subMenu2Clicked = (e: any) => {
  //     navLinks.classList.toggle("show3");
  // }

  return (
    <div id="NavBar">
      <nav>
        <div className="navbar">
          <AiOutlineMenu
            className="bx bx-menu"
            onClick={menuOpenButtonClicked}
            height={"20px"}
          />
          <div className="logo">
            {/* <a>CodingLab</a> */}
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="nav-links">
            <div className="sidebar-logo">
              {/* <span className="logo-name">CodingLab</span> */}
              <img src={logoWhite} alt="logo" className="logo-name" />
              <ImCross
                className="bx bx-x"
                onClick={menuCloseButtonClicked}
                color="white"
              />
            </div>
            <ul className="links">
              <li>
                {/* IMPORTANT: Link used to ensure site doesn't reload, especially becaue we need to include window.location.origin,
                so the navigation works from any public page across the whole site */}
                <Link to={window.location.origin + '/#for-students'} onClick={closeMobileMenuIfOpen}>For Students</Link>
              </li>
              <li>
                <Link to={window.location.origin + '/#for-schools'} onClick={closeMobileMenuIfOpen}>For Schools</Link>
              </li>
              <li>
                <Link to={window.location.origin + '/#our-vision'} onClick={closeMobileMenuIfOpen}>Our Vision</Link>
              </li>
              <li>
                <Link to={window.location.origin + '/#pricing'} onClick={closeMobileMenuIfOpen}>Pricing</Link>
              </li>
              <li>
                <Link to={window.location.origin + '/#newsletter'} onClick={closeMobileMenuIfOpen}>Newsletter</Link>
              </li>
              <li className="hideInDesktopView">
                <Link to={"/sign-up"}>Sign Up</Link>
              </li>
              <li className="hideInDesktopView">
                <Button text="Login" linkTo="/login"/>
              </li>
              {/* <li>
                  <a onClick={subMenu1Clicked}>HTML & CSS</a>
                  <AiFillCaretDown className='bx bxs-chevron-down submenu-1-arrow arrow'/>
                  <ul className="htmlCss-sub-menu sub-menu">
                      <li><a>Web Design</a></li>
                      <li><a>Login Forms</a></li>
                      <li><a>Card Design</a></li>
                      <li className="more">
                          <span><a onClick={subSubMenu1Clicked}>More</a>
                              <AiFillCaretRight className='bx bxs-chevron-right arrow sub-submenu-1-arrow'/>
                          </span>
                          <ul className="more-sub-menu sub-menu">
                              <li><a>Neumorphism</a></li>
                              <li><a>Pre-loader</a></li>
                              <li><a>Glassmorphism</a></li>
                          </ul>
                      </li>
                  </ul>
              </li>
              <li>
                  <a onClick={subMenu2Clicked}>JAVASCRIPT</a>
                  <AiFillCaretDown className='bx bxs-chevron-down submenu-2-arrow arrow'/>
                  <ul className="js-sub-menu sub-menu">
                      <li><a>Dynamic Clock</a></li>
                      <li><a>Form Validation</a></li>
                      <li><a>Card Slider</a></li>
                      <li><a>Complete Website</a></li>
                  </ul>
              </li> */}
            </ul>
          </div>
          <ul className="search-box">
            <li>
              <Link to={"/sign-up"}>Sign Up</Link>
            </li>
            {/* <li>
              <Link to={"/contact-us"}>Contact us</Link>
            </li> */}
            <Button text="Login" linkTo="/login" />
            {/* <i className='bx bx-search'></i>
              <div className="input-box">
                  <input type="text" placeholder="Search..."/>
              </div> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
