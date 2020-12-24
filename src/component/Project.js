import React from 'react';

import ReactDOM from 'react-dom';

import { Link,Route, Switch,BrowserRouter   } from 'react-router-dom';

import {project_details} from './Data/project_data';

function Project()
    { let Projectbar=(
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Blog">Blog</Link></li>
                        </ul>
                    
                  );
       let project;
     

        project=project_details.map(value=> <div>
            <h1><a href={value.refrence}>{value.name} </a></h1>
            <p>{value.description}</p>
            <a href={value.Gitrepo}>Github Repo</a>
            <p>Technology Used: {value.techonlogy_used}</p>

            </div>) ;
        
        return (    <div>
                       
                        <h2>Projects By Satish Narayan</h2>
                     <div>{project}</div> 
                    </div>
                );
        }

export default Project;