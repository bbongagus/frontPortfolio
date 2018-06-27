import React from 'react';
import Modal from '../Modal/Modal';

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
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        let divStyle = this.calculateStyle();
        let path = this.props.previewPath;
        const key = this.props.key;
        const pathToFull = this.props.pathToFull;
        const getFullImage = () => this.state.path;
        // const styles = {
        //     maxWidth: '75%',
        //     maxHeight: '75%'
          // }
        const style={
            maxWidth: '75%',
            maxHeight: '75vh'
        }
        return (


            <div className='Gallery-Item' onClick={this.toggleModal} >
                <img src={path} key={key} style={divStyle} onClick={this.toggleModal} />
                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal} image='1'>
                   <img src={pathToFull} style={style}/> 
                </Modal>
            </div>
        )
    }
}