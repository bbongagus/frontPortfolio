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
        Object.keys(data).forEach(image => {
        data = updObj(data, image, id(), "id");
       //>> move tabs 
    });
    return data;
}
const addItem = (arr, newEntry) => [...arr, ...newEntry];
const def = (x) => typeof x !== 'undefined';
// const addItems = (arr, [x, ...xs]) => def(x) ?
module.exports.generatePreviewsArray = generatePreviewsArray;
//     constructor(){
//         const loadImages = async () => {
//             const data = await axios.get('http://localhost:3000/images/').data;
//             return data;
//         }
//         const previews = Object.values(items)
//         console.log('​GalleryDataInterface -> changeItems -> ', items );
//         const images = Object.keys(items)
//         const previewsPaths = previews.map(value => `'http://localhost:3000/images/previews/${value}`);
//         this.items = [...previewsPaths];
//         // const startItem = new GalleryItem('http://achtungthemes.com/borano/img/gallery/5.jpg');
//         // const startItems = [
//         //     new GalleryItem('http://achtungthemes.com/borano/img/gallery/5.jpg'),
//         //     new GalleryItem('http://achtungthemes.com/borano/img/gallery/1.jpg'),
//         //     new GalleryItem('http://achtungthemes.com/borano/img/gallery/2.jpg'),
//         //     new GalleryItem('http://achtungthemes.com/borano/img/gallery/3.jpg'),
//         //     new GalleryItem('http://achtungthemes.com/borano/img/gallery/5.jpg'),
//         //     new GalleryItem('http://achtungthemes.com/borano/img/gallery/6.jpg'),
//         // ]
//     }

//     addItem(path){
//         const newItem = new GalleryItem(path);
//         this.items.push(newItem);
//         return newItem;
//     }

//     deleteItem(id){
//         const index = findIndex(this.items, (item) => item.id === id);
//         if (index > -1)
//             this.items.splice(index, 1);
//     }
//     getAllItems(){
//         return this.items.map(item => item);
//     }
// }