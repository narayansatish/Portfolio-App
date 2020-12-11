import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import {Route, Switch } from 'react-router-dom';
import {blog_details } from './Data/blog_data';
function Blog()
    { let Blogbar=(
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Project">Project</Link></li>
                        </ul>
                    
                  );
       let blogs=[],temp;
       for (let i=0;i<blog_details.length;i++) {
        let value = blog_details[i];
        temp=<li><a href={value.refrence}>{value.name}</a></li>;
        blogs.push(temp);
      }
        return (    <div>
                        {Blogbar}
                        <h2>List of Blog By Satish Narayan</h2>
                        <ul>{blogs}</ul>
                    </div>
                );
        }

export default Blog;