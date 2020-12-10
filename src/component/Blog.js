import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import {Route, Switch } from 'react-router-dom';
function Blog()
    { let Blogbar=(
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Project">Project</Link></li>
                        </ul>
                    
                  );
        return (    <div>
                        {Blogbar}
                        <h2>List of Blog By Satish Narayan</h2>
                      
                    </div>
                );
        }

export default Blog;