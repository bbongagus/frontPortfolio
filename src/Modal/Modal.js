import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Modal.scss';
export default class Modal extends React.Component{
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
            backgroundColor: 'rgba(0,0,0,.3)',
            padding: 50,
            zIndex: 50,
            transition: 'all 0.3s ease-in'
        }
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30
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