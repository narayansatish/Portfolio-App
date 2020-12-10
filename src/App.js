import logo from './logo.svg';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import Home from "./component/Home.js";
import Blog from "./component/Blog.js";
import Project from "./component/Project.js";
function App() {
  return (
    <main>
    <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/Blog" component={Blog} exact/>
                <Route path="/Project" component={Project} exact/>
    </Switch>
</main>
    
  );
}

export default App;
