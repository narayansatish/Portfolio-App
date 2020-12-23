import React from 'react';

import ReactDOM from 'react-dom';

import { Link,Route, Switch,BrowserRouter   } from 'react-router-dom';

import {blog_details } from './Data/blog_data';

function Blog()
    { let Blogbar=(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Project">Project</Link></li>
        </ul>
    
  );
        let blogs;
   
        blogs=blog_details.map((value)=><li><a href={value.refrence}>{value.name}</a></li>);

        return (    <div>
                       
                        <h2>List of Blog By Satish Narayan</h2>
                        <ul>{blogs}</ul>
                    </div>
                );
        }

export default Blog;