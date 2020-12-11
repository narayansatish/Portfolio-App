import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import {Route, Switch } from 'react-router-dom';
import {project_details} from './Data/project_data';
function Project()
    { let Projectbar=(
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Blog">Blog</Link></li>
                        </ul>
                    
                  );
       let project=[],temp;
       for(let i=0;i<project_details.length;i++)
            {   let value=project_details[i];
                temp=<div>
                    <h1><a href={value.refrence}>{value.name} </a></h1>
                    <p>{value.description}</p>
                    <a href={value.Gitrepo}>Github Repo</a>
                    <p>Technology Used: {value.techonlogy_used}</p>

                    </div>;
                project.push(temp);
        }
        return (    <div>
                        {Projectbar}
                        <h2>Projects By Satish Narayan</h2>
                     <div>{project}</div> 
                    </div>
                );
        }

export default Project;