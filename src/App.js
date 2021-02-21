import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from "./component/Home.js";
import Blog from "./component/Blog.js";
import Project from "./component/Project.js";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row, Col, Container } from 'react-bootstrap';
import Footer from './component/Footer';
import footer from './component/css/footer.css'
function App() {
  let navbar = (
    <Container fluid style={{ backgroundColor: 'indigo', color: "white", padding: "1rem" }} id="navbar" >
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ alignSelf: 'flex-end', marginRight: "auto" }}>Satish Narayan</div>
        <div><Link to="/" style={{ color: 'white', marginLeft: "5px" }} >Home</Link></div>
        <div> <Link to="/Project" style={{ color: 'white', marginLeft: "10px" }}>Project</Link></div>
        <div><Link to="/Blog" style={{ color: 'white', marginLeft: "10px" }}>Blog</Link> </div>
      </div>
    </Container>

  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {navbar}
      <main>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Blog" component={Blog} exact />
          <Route path="/Project" component={Project} exact />
        </Switch>

      </main>

      <Footer />

    </div>

  );
}

export default App;
