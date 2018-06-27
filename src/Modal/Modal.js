import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Modal.scss';
export default class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ...props
        }
    }
    render(){
        if (!this.props.show){
            return null;
        }
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: this.props.image=='1' ? 'rgba(0,0,0,.3)' : '#fff',
            padding:this.props.image=='1' ? 50 :  0,
            zIndex: 50,
            transition: 'all 0.3s ease-in'
        }
        console.log(this.props.image)
        const modalStyle = {
            backgroundColor: this.props.image=='1' ? 'transparent' : 'transparent',
            borderRadius: 5,
            maxWidth: this.props.image!='1'? 500 : '75%', 
            minHeight: this.props.image!='1'? 300 : '75vh',
            margin: '0 auto',
            padding: 50
        }
        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>
                    {this.props.children}
                    <div className="footer">
                        {/* <button onClick={this.props.onClose}> */}
                            {/* onClose */}
                        {/* </button> */}
                    </div>
                </div>
            </div>
        );
    }
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
}