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
import Gallery from './Gallery/GalleryApp';
import Footer from './footer';
const Home = (image) => (
    <div className='Home'>
        <div><h2>Hello!</h2></div>
        <div id='two'><h2>We are photographs from Russia.</h2></div>
        <div id='three'><h2>We are ready to work together.</h2></div>
        {/* <img src='https://sun1-18.userapi.com/c840739/v840739485/7adf6/bItRTUSwLYo.jpg'/> */}
        <Footer/>
    </div>
)
const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={About}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/gallery' component={GalleryApp}/>
    </Switch>
)
const App = () => (
    <div className="parent">
    <Header headerLinks={['home', 'gallery',  'blog', 'contact']} header='Pacani produsion'/>
    <Main/>
    </div>
);
ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>, document.getElementById('root')
);  
   