import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import {personal_details as info} from './Data/personal_details';
function Home()
{   function printtech(item)
        {
            let str="";
            for(let i=0;i<item.length;i++)
                str=str+item[i]+",";
            return str;
        }
    let media=[],temp;
    for (let key in info.SocialMedia) {
        let value = info.SocialMedia[key];
        temp=<li><a href={value[1]}>{value[0]}</a></li>;
        media.push(temp);
      }
    let image=<img src={info.details.pic}></img>;
    let Homebar=(
                <ul>
                    <li><Link to="/Blog">Blog</Link></li>
                    <li><Link to="/Project">Project</Link></li>
                </ul>
                
                );
    return (    <div>
                    {Homebar}
                    <h2>{info.details.name} {image}</h2>
                    <article>
                    {info.details.bio}
                    </article>
                    <h1>Technology</h1>
                    <p>{printtech(info.details.technology)}</p>
                    <h1> connect with me</h1>
                    {media}
                </div>
            );
        }
    export default Home;