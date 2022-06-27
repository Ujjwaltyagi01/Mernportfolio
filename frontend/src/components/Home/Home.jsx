import React, { useEffect } from "react";
import "./Home.css"
import * as Three from "three";
import moonimage from "../../images/moon.jpg"
import venusimage from "../../images/venus.jpg"
import spaceimage from "../../images/space.jpg"
import { Link, Typography } from "@mui/material";
import TimeLine from "../Timeline/Timeline";
import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({ timelines, youtubes, skills }) => {


    useEffect(() => {

        const textload = new Three.TextureLoader();

        const moontext = textload.load(moonimage);
        const venustext = textload.load(venusimage);
        const spacetext = textload.load(spaceimage);

        const scene = new Three.Scene();
        const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const canvas = document.querySelector(".homeCanvas");
        const renderer = new Three.WebGL1Renderer({ canvas });

        const geometry = new Three.SphereGeometry(2, 64, 64);
        const material = new Three.MeshStandardMaterial({ map: moontext });
        const mesh = new Three.Mesh(geometry, material);

        const venusgeometry = new Three.SphereGeometry(3, 64, 64);
        const venusmaterial = new Three.MeshBasicMaterial({ map: venustext });
        const venusmesh = new Three.Mesh(venusgeometry, venusmaterial);

        const light = new Three.PointLight("0xffffff", 1);
        const light2 = new Three.PointLight("0xffffff", 1);
        light.position.set(8, 5, 5);
        light2.position.set(-8, -5, -5);

        // const controls = new OrbitControls(camera,renderer.domElement);

        scene.add(mesh);
        scene.add(venusmesh);
        scene.add(light);
        scene.add(light2);
        scene.background = spacetext;
        venusmesh.position.set(7, 4, 4);
        camera.position.set(3, 4, 7);

        const speed = 0.01;
        window.addEventListener("mousemove", (e) => {
            if (e.clientX < window.innerWidth / 2) {
                // mesh.rotation.x-=speed;
                // mesh.position.y+=-speed;
                venusmesh.rotation.x -= speed;
                venusmesh.position.y += -speed;
            }
            if (e.clientX >= window.innerWidth / 2) {
                // mesh.rotation.x-=speed;
                // mesh.position.y-=-speed;
                venusmesh.rotation.x -= speed;
                venusmesh.position.y -= -speed;
            }
            if (e.clientY < window.innerHeight / 2) {
                // mesh.rotation.x-=speed;
                // mesh.position.y+=-speed;
                venusmesh.rotation.x -= speed;
                venusmesh.position.y += -speed;
            }
            if (e.clientY <= window.innerHeight / 2) {
                // mesh.rotation.x-=speed;
                // mesh.position.y-=-speed;
                venusmesh.rotation.x -= speed;
                venusmesh.position.y -= -speed;
            }
        })
        const animate = () => {
            requestAnimationFrame(animate);
            mesh.rotation.y += 0.01;
            venusmesh.rotation.y += 0.001;
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);

        };
        animate();
        return window.addEventListener("scroll", (e) => {
            camera.rotation.y = window.scrollY * 0.003;
            camera.rotation.z = window.scrollY * 0.001;
            const skillsBox = document.getElementById("homeskillsBox");

            if (window.scrollY > 1300) {
                skillsBox.style.animationName = "homeskillsBoxAnimationOn";
            } else {
                skillsBox.style.animationName = "homeskillsBoxAnimationOff";
            }
        })

    }, [])
    return (<div className="home">

        <canvas className="homeCanvas"></canvas>
            <div className="homeCanvasContainer">
                <Typography variant="h1">
                    <p>U</p>
                    <p>J</p>
                    <p>J</p>
                    <p>W</p>
                    <p>A</p>
                    <p>L</p>    
                </Typography>
                <div className="homeCanvasBox">
                    {/* <Typography variant="h2"></Typography> */}
                    <Typography variant="h2">DEVELOPER</Typography>
                    <Typography variant="h2">CONTENT CREATOR</Typography>
                </div>
                <Link to="/projects">VIEW WORK</Link>
            </div>
            <div className="homeScrollBtn">
                <MouseOutlined/>
            </div>

        <div className="homeContainer">
            <Typography variant="h3">TIMELINE</Typography>
            <TimeLine timelines={timelines} />
        </div>
        <div className="homeSkills">
            <Typography variant="h3">SKILLS</Typography>
            <div className="homeCubeSkills">
                <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                    <img src={skills.image1.url} alt="face1" />

                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                    <img src={skills.image2.url} alt="face2" />

                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                    <img src={skills.image3.url} alt="face3" />

                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                    <img src={skills.image4.url} alt="face4" />

                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                    <img src={skills.image5.url} alt="face5" />

                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                    <img src={skills.image6.url} alt="face6" />

                </div>
            </div>
            <div className="cubeShadow"></div>
            <div className="homeskillsBox" id="homeskillsBox">
                <SiCplusplus />
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
                <SiMongodb />
                <SiExpress />
                <SiReact />
                <SiNodedotjs />
                <SiThreedotjs />
            </div>
        </div>
        <div className="homeYoutube">
            <Typography variant="h3">YOUTUBE VIDEOS</Typography>
            <div className="homeyoutubeWrapper">
                {
                    youtubes.map((item) => (
                        <YoutubeCard image={item.image.url} title={item.title} url={item.url} id={item._id} key={item._id} />
                    ))}


            </div>
        </div>

    </div>
    );
};
export default Home;