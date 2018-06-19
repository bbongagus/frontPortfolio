import React from 'react';

export default class GallerySingleItem extends React.Component {
    calculateStyle = () => {
        const widthScreen = window.innerWidth/5 - 4;
        return {
            // width: widthScreen
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
        const key = this.props.key;
        return (


            <div className='Gallery-Item'  >
                <img src={path} key={key} style={divStyle} />
            </div>
        )
    }
}