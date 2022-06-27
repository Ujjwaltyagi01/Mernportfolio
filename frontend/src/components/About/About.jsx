import { Typography } from "@mui/material";
import React from "react";
import "./About.css";
import logo from "../../images/aa.jpeg";

const About = ({about})=>{
    return (
        <div className="About">
            <div className="aboutContainer">
                <Typography>{about.quote}</Typography>
            </div>
            <div className="aboutContainer1">
                <div>
                    <img src={about.avatar.url} alt="video" className="myimg"/>
                    <Typography variant="h4" style={{margin: "1vmax 0",color: "black"}}>{about.name}</Typography>
                    <Typography style={{margin: "1vmax 0"}}>{about.title}</Typography>
                    <Typography style={{margin: "1vmax 0"}}>{about.subtitle}</Typography>
                </div>
                <div>
                    <Typography style={{textAlign:"right",letterSpacing:"6px",wordSpacing:"6px",lineHeight:"50px"}}>{about.description}</Typography>
                        
                </div>
            </div>
        </div>
    )
}
export default About;