import React from "react";

import {
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    Nav,
    Row,
    Col,
    Container,
    Image,
} from "react-bootstrap";

import ReactDOM from "react-dom";

import { Link, Route, Switch, BrowserRouter } from "react-router-dom";

import { personal_details as info } from "./Data/personal_details";
import "./css/Home.css";

function Home() {
    function printtech(item) {
        let str = [];
        let colour = ["navy", "indigo", "pink", "orange", "red", "#eb8f34", "#ebdf34", "#34ebc6"];
        for (let i = 0; i < item.length; i++) {
            let sty = { backgroundColor: colour[i], }

            str.push(<h4 className="technology" style={sty}>{item[i]}</h4>);
        }

        return str;
    }
    let media = [],
        temp;
    for (let key in info.SocialMedia) {
        let value = info.SocialMedia[key];
        temp = (
            <li>
                <a href={value[1]}>{value[0]}</a>
            </li>
        );
        media.push(temp);
    }

    let image = (
        <Image
            style={{ width: "100%" }}
            id="satishImage"
            src="https://i.ibb.co/tBVNb7b/profile-pic.jpg"
            roundedCircle
        />
    );

    return (
        <div>

            <div style={{ display: "flex" }} id="mainContent">

                <Image
                    id="satishImage"
                    src="https://i.ibb.co/tBVNb7b/profile-pic.jpg"
                    roundedCircle
                />


                <div id="info">



                    <h1 className="intro" >👋 Hey, I'm Satish</h1>
                    <h3 className="description">I am a Problem Solver,working on Front-End Development.</h3>
                </div>
            </div>

            <div>
                <div id="technology">
                    <h1 className="tech" >Technology</h1>
                    <div id="language">{printtech(info.details.technology)}</div>

                </div>
            </div>
        </div>
    );
}

export default Home;
