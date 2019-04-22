import React from 'react';
import Landing from './landing';
import About from './about';
import Projects from './projects';
import Gallery from './gallery';
import Resume from './resume';
import Contact from './contact';
import {Switch, Route} from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path='/' component ={Landing}/>
        <Route path='/about' component ={About}/>
        <Route path='/projects' component ={Projects}/>
        <Route path='/gallery' component ={Gallery}/>
        <Route path='/resume' component ={Resume}/>
        <Route path='/contact' component ={Contact}/>
    </Switch>
)

export default Main;