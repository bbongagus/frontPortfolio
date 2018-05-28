import React from 'react';
import GallerySingleItem from './GallerySingleItem';
import './gallery.scss';
import { generatePreviewsArray  } from './GalleryDataInterface';
const defaultPathToImages = 'http://localhost:3000/images';
const defaultPathToPreviews = defaultPathToImages + '/previews/'
export default class Gallery extends React.Component{
    //getInitialState
    //getDefaultProps
    state = {
        items: []
    }
    componentWillMount(){
        /* Called before the render method is executed. Setting state in this phase will not trigger a re-rendering */
        this._asyncRequrest = generatePreviewsArray()
            .then(items => {
                this._asyncRequrest = null;
                this.setState({items});
            });
    }
    render(){
        const items = Object.values(this.state.items);
        if (items.length > 0){
            const gallery = (innerItems) => <div className='Gallery'>{innerItems}</div>
            const galleryItem = item => <GallerySingleItem previewPath={defaultPathToPreviews+item.preview} key={item.id}/>
            console.log('​Gallery -> render -> ', this.state );
            return (
                gallery(
                    items.map(item => galleryItem(item))
                )
            )
        }
        return false;

    }
    componentDidMount(){
        /* Called after the render method is executed. The DOM can be accessed in this method, enabling to define DOM or data fetching operations. 
           Any DOM interactions should always happen in this pahes not inside the render method. */
    }
    /* These method called once on mounting */
    shouldComponentUpdate(nextProps, nextState){
        /* Called before the render method and enables to define if a re-rendering is needed or can be skipped. */
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        /* Gets called as soon as the shouldComponentUpdate returned True and before render method. Any state changes via this.setState are not
        allowed as this method should be strictly used to prepare for an upcoming update not trigger an update itself */
    }
    componentDidUpdate(prevProps, prevState){
        /* Gets called after the render method. Used to perform DOM operations after the data has been updated. */
    }
    componentWillReceiveProps(nextProps){
        this.setState({

        })
        /* Is only called when the props have changed and when this is not an initial rendering. Enables to update the state depending on the
        existing and upcoming props, without triggering another rendering. */
    }
    componentWillUnmount(){
        if (this._asyncRequrest) 
        this._asyncRequrest.cancel();
        /* Gets called before the component is removed from the DOM. Its can be beneficial when needing to perform clean up operations. */
    }
}

















// import { getImagesFromServer } from './GalleryDataInterface';
// const Gallery = () => {
//     const items = this.state.items;
//     return (
//         <div className='Gallery'>
//             {
//                 items.map(value => <GallerySingleItem item={item} key={item.id}/>)
//             }
//         </div>
//     )
// }
// export default class Gallery extends React.Component {
//     constructor(props){
//         super(props);
//         getImagesFromServer().then(images => this.state = { items: images });
//     }

//     render(){
//         let items = this.state.items;

//         return (
//             <div className='Gallery'>
//                 {
//                     items.map(
//                         item => 
//                             <GallerySingleItem item={item} key={item.id}/>
//                     )
//                 }
//             </div>
//         )
//     }
// }