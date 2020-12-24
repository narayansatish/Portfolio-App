import React from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row,Col,Container } from 'react-bootstrap';

import ReactDOM from 'react-dom';

import { Link,Route, Switch,BrowserRouter   } from 'react-router-dom';

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
    return (    <Container fluid style={{ backgroundColor: '#f5f7f6' ,color:"#c46666",display: 'flex',flexDirection: 'column',  justifyContent:'center', alignItems:'center',alignItems:'center'}}   >
                    <div className="row">
                    <div className="col-xs-8">
                        <h2>{info.details.name} </h2></div>
                    <div className="col-xs-4"> {image}</div>
                    </div>
                   
                    
                    <article>
                    {info.details.bio}
                    </article>
                    <h1>Technology</h1>
                    <p>{printtech(info.details.technology)}</p>
                    <h1> connect with me</h1>
                    {media}
                    </Container>
            );
        }
    export default Home;