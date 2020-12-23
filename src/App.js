import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link,Route, Switch,BrowserRouter   } from 'react-router-dom';
import Home from "./component/Home.js";
import Blog from "./component/Blog.js";
import Project from "./component/Project.js";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row,Col,Container } from 'react-bootstrap';
function App() {
  let navbar=(
    <Container fluid style={{ backgroundColor: '#66c4bf' ,color:"#c46666"  }} >
    <Row>
        <Col lg={{ span:1, offset: 9}} xs={4}><Link to="/" >Home</Link></Col>
        <Col lg={1} xs={4}> <Link to="/Project" >Project</Link></Col>
        <Col lg={1} xs={4}><Link to="/Blog" >Blog</Link> </Col>
      </Row>
    </Container>

);

  return (
    <div>
      {navbar}   
        <main>
   
    <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/Blog" component={Blog} exact/>
                <Route path="/Project" component={Project} exact/>
    </Switch>
   
        </main>
      </div>
    
  );
}

export default App;
