import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import {Route, Switch } from 'react-router-dom';
function Project()
    { let Projectbar=(
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Blog">Blog</Link></li>
                        </ul>
                    
                  );
        return (    <div>
                        {Projectbar}
                        <h2>Projects By Satish Narayan</h2>
                      
                    </div>
                );
        }

export default Project;