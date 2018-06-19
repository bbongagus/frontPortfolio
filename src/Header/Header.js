import React from 'react';
import {Link} from 'react-router-dom';
export default class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ...this.props
            }
    }
    itsScrolling(){
        const val = window.scrollY/((document.documentElement.scrollHeight-window.innerHeight)/document.documentElement.scrollWidth);

        console.log('​itsScrolling -> val ', val );

        document.querySelector('.Navigation-ScrollLine').setAttribute("style", `width: ${val}px`);
    }
    componentDidMount(){
        window.addEventListener('scroll', this.itsScrolling.bind(this));
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.itsScrolling.bind(this));
    }
    render(){
    // console.log(headerLinks);
    let {headerLinks: headerLinks} = this.state;
    const generateHeaderLink = (link, index) => !index
            ? (<Link className='Navigation-Element' to='/'>{link} </Link>)
            : (<Link className='Navigation-Element' to={`/${link}`}>{link}</Link>)
    headerLinks = headerLinks.map((link, i) => generateHeaderLink(link, i));
    return (
    <header id='Header'>
    <nav className="Navigation">
            <div className="Navigation-Header">{this.state.header}</div>
            {headerLinks}
     <div className='Navigation-ScrollLine'></div>
     </nav>   
     </header>  
)}}
