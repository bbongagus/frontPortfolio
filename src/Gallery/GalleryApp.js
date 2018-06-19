import React from 'react';
import GallerySingleItem from './GallerySingleItem';
import './gallery.scss';
import { generatePreviewsArray  } from './GalleryDataInterface';
import Masonry from 'react-masonry-component';
// import { lchown } from 'fs';
const defaultPathToImages = 'http://localhost:3000/images';
const defaultPathToPreviews = defaultPathToImages + '/previews/'
const def = (val) => typeof val !== 'undefined'
export default class Gallery extends React.Component{
    //getInitialState
    //getDefaultProps
    state = {
        items: [],
        columns: 5
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
        console.log('​Gallery -> render -> ', );
        if (items.length > 0){
            const galleryItem = item => <GallerySingleItem previewPath={defaultPathToPreviews+item.preview} key={item.id}/>
            const childs = items.map(item => galleryItem(item));
            return (<Masonry
                        className='Gallery'
                        elementType='div'
                        >
                        {childs}
                    </Masonry>)
        }
        return false;

    }
    itsScrolling(){
        const header = document.querySelector('.Navigation');
        const headerHeader = document.querySelector('.Navigation-Header');
        if (window.scrollY > 100){
            header.classList.add('Navigation--small');
            headerHeader.classList.add('Navigation-Header--small');
        
        } else{
            header.classList.remove('Navigation--small');
            headerHeader.classList.remove('Navigation-Header--small');

        }
    }
    componentDidMount(){
        /* Called after the render method is executed. The DOM can be accessed in this method, enabling to define DOM or data fetching operations. 
           Any DOM interactions should always happen in this pahes not inside the render method. */
        // window.addEventListener('resize', this.updateDimesions.bind(this) );
        // document.querySelector('.Gallery').setAttribute(`style`, `margin-top: ${document.querySelector('.Navigation').clientHeight}`);
        window.addEventListener('scroll', this.itsScrolling.bind(this))
        setTimeout(() => document.querySelector('.Gallery').setAttribute("style", "opacity: 1;"), 1000);
    }
    /* These method called once on mounting */
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        
        // const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
        
        /* Gets called as soon as the shouldComponentUpdate returned True and before render method. Any state changes via this.setState are not
        allowed as this method should be strictly used to prepare for an upcoming update not trigger an update itself */
    }
    componentDidUpdate(prevProps, prevState){


        /* Gets called after the render method. Used to perform DOM operations after the data has been updated. */
    }
    componentWillReceiveProps(nextProps){
        // this.setState({
// 
        // })
        /* Is only called when the props have changed and when this is not an initial rendering. Enables to update the state depending on the
        existing and upcoming props, without triggering another rendering. */
    }
    componentWillUnmount(){
        if (this._asyncRequrest) 
        this._asyncRequrest.cancel();
        window.removeEventListener('scroll', this.itsScrolling.bind(this));
        // window.removeEventListener('resize', this.updateDimesions.bind(this));
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