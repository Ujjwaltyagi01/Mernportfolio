import React  from "react";
import {ReactNavbar} from "overlay-navbar";
import logo from "../../images/download.png";
import {FaUserAlt} from "react-icons/fa"

const Header= () => {
    return <ReactNavbar 
        navColor1="white"
        navColor2="rgb(20, 20, 72)"
        // navColor3="rgb(54, 8, 97)"
        // navColor4="rgb(86, 18, 18)" 
        burgerColor="rgb(84, 134, 38)"
        burgerColorHover="rgb(127, 226, 33)"
        logoWidth="100px"
        logo={logo}
        logoHoverColor="rgb(214, 66, 21)"
        nav2justifyContent="space-around"
        nav3justifyContent="space-around"
        link1Text="Home"    
        link2Text="About"
        link3Text="Projects"
        link4Text="Contact"
        link1Url="/"
        link2Url="/about"
        link3Url="/projects"
        link4Url="/contact"
        link1ColorHover="white"
        link1Color="rgb(124, 26, 181)"
        link1Size="1.3rem"
        link1Padding="3vmax"    
        profileIcon={true} 
        ProfileIconElement={FaUserAlt}
        profileIconColorHover="black"
    />;
};
export default Header;