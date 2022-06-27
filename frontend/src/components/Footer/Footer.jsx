import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css"
const Footer = ()=>{
    return(
        <div className="footer">
            <div>
                <Typography varient="h5" >About Me</Typography>
                <Typography>
                    Hey! I am ujjwal Tyagi. I am a full stack developer and a 
                    vlogger on Youtube channel called <b>IIT ka munda</b>
                </Typography>

                <Link to="/contact" className="footerContactBtn">
                    <Typography>Contact Us</Typography>
                </Link>
            </div>
            <div>
                <Typography variant="h6">Social Media</Typography>
                <a href="https://github.com/Ujjwaltyagi01" target="black">
                <BsGithub />
                </a>
                <a href="https://www.youtube.com/channel/UCQCqcZdTCDmnTQabIRBf7-A" target="black">
                <BsYoutube />
                </a>
                <a href="https://www.instagram.com/ujjwaltyagi_01/" target="black">
                <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/ujjwal-tyagi-933871212/" target="black">
                <BsLinkedin />
                </a>
            </div>
        </div>
    )
}
export default Footer;