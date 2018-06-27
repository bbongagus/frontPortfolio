import React from 'react';
import {Link} from 'react-router-dom';
import './About.scss';
import Modal from '../Modal/Modal';
import Footer from '../footer';
export default class About extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ...this.props,
            isOpen: false
            }
        }
    toggleModal = () => {

        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    componentDidMount(){

    }
    componentWillUnmount(){
    }
    render(){
        const contactForm = () => (
            <form method='post' action="http://localhost:3000/" id="ContactForm">
                <input name="name" placeholder="What is your name?" class="name" required />
                <input name="emailaddress" placeholder="What is your email?" class="email" type="email" required />
                <textarea rows="4" cols="50" name="subject" placeholder="Please enter your message" class="message" required></textarea>
                <input name="submit" class="btn" type="submit" value="Send" />
            </form>
        )
        return (
            <div className="About">
                <div className='top'>
                <h1>Who we are?</h1>
                </div>
                <div className='About-Info'>

                <h2>We are Moscow Polytech students. If you want to collaborate you can contact with us.</h2>
                </div>
                <button onClick={this.toggleModal} className="Button">Contact</button>
                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    {contactForm()}
                </Modal>

                <Footer/>
            </div>
        )
    }
    }