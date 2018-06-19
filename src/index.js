import './scss/main.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import GalleryApp from './Gallery/GalleryApp';
import { getImagesFromServer }from './Gallery/GalleryDataInterface';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import About from './About/About';
import Blog from './Blog/Blog';
const Main = () => (
    <Switch>
        <Route exact path='/' component={GalleryApp}/>
        <Route path='/about' component={About}/>
        <Route path='/blog' component={Blog}/>
    </Switch>
)
const App = () => (
    <div className="parent">
    <Header headerLinks={['home', 'portfolio', 'gallery', 'about', 'blog', 'contact']} header='Pacani produsion'/>
    <Main/>
    </div>
);
ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>, document.getElementById('root')
);  
   