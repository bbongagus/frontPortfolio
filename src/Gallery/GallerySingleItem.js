import React from 'react';

export default class GallerySingleItem extends React.Component {
    calculateStyle = () => {
        const widthScreen = window.innerWidth/3 - 20;
        return {
            height: window.innerHeight/3 -20 
            // height: '200px',
            // backgroundImage: `url(${path})`,
            // backgroundSize: 'cover',
            // backgroundPositionX: '50%',
            // backgroundPositionY: '50%'

        }
    }
    render() {
        let divStyle = this.calculateStyle();
        let path = this.props.previewPath;
        return (


            <div className='Gallery-Item'  >
                <img src={path} style={divStyle} />
            </div>
        )
    }
}