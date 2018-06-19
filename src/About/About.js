import React from 'react';
import {Link} from 'react-router-dom';
import './About.scss';
import Modal from '../Modal/Modal';
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
                <h1>Мы, студенты Московского политеха, Кресик Андрей и Бамба</h1>
                <h2>Львы и профессионалы в области сайтостроения</h2>
                <p className="lorem">Proident nisi eu tempor in occaecat minim. Pariatur culpa voluptate do minim enim nisi adipisicing reprehenderit dolore nostrud culpa irure mollit. In deserunt aliqua adipisicing cillum veniam. Deserunt exercitation occaecat in veniam sunt anim in mollit irure proident voluptate exercitation ut non. Ipsum et velit ea ad excepteur consequat.</p>
                <button onClick={this.toggleModal} className="Button">Связаться</button>
                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    {contactForm()}
                </Modal>

            </div>
        )
    }
    }