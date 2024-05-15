import React from 'react';

import ReactDOM from 'react-dom';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row, Col, Container, Alert, Card, Button } from 'react-bootstrap';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import { project_details } from './Data/project_data';

function Project() {
    let Projectbar = (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
        </ul>

    );
    let project;


    project = project_details.map(value =>
        <Card style={{ width: '18rem', backgroundColor: "indigo", color: "white" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{value.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                <Button style={{ backgroundColor: "black", borderColor: "green", borderWidth: "3px" }} >Live<i className="bi bi-link"></i></Button>
            </Card.Body>
        </Card>);







    return (<div style={{ marginTop: "1rem" }}>

        <h2 style={{ textAlign: "center" }}>Projects</h2>
        <div style={{ display: "flex", justifyContent: 'space-evenly', flexWrap: "wrap" }}>{project}</div>
    </div>
    );
}

export default Project;