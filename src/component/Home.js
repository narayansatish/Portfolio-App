import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';

function Home()
{   let Homebar=(
                <ul>
                    <li><Link to="/Blog">Blog</Link></li>
                    <li><Link to="/Project">Project</Link></li>
                </ul>
                
                );
    return (    <div>
                    {Homebar}
                    <h2>Satish Narayan</h2>
                    <article>
                       I am a aspiring Full-Stack Developer .
                    </article>
                </div>
            );
        }
    export default Home;