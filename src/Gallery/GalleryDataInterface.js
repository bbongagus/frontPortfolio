// TODO make loader for Gallery, images should be cached, 
// there is should be image icons and images separetly
// TODO:
// loadItems
// 
import { findIndex } from 'lodash';
import axios from 'axios';
import GalleryItem from './Gallery';
import regeneratorRuntime from 'regenerator-runtime';

const getImagesFromServer = async() => {
    const recievedData = await axios.get('http://localhost:3000/images/');
    return recievedData.data;
}
const generatePreviewsArray = async() => {
    const id = () => '_'+Math.random().toString(36).substr(2, 9);
    let data = await getImagesFromServer();
    const updObj = (obj, key, value, propName) => {
        let tempObj = Object.assign({}, obj);
        tempObj[key][propName] = value; 
        return tempObj;
    }
    return data;
}
const addItem = (arr, newEntry) => [...arr, ...newEntry];
const def = (x) => typeof x !== 'undefined';
module.exports.generatePreviewsArray = generatePreviewsArray;