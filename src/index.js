import './scss/main.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import GalleryApp from './Gallery/GalleryApp';
import { getImagesFromServer }from './Gallery/GalleryDataInterface';
import axios from 'axios';

// class App extends React.Component{
//     render(){
//         return (
//         <div className='one'>
//             Hello world!
//         </div>
//         )
//     }
// }

ReactDOM.render(
    <GalleryApp getImagesFromServer={getImagesFromServer}/>, document.getElementById('gallery')
);