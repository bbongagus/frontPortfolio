import React from 'react';
import {Link} from 'react-router-dom';
import './Blog.scss';
// import Modal from '../Modal/Modal';
export default class Blog extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ...this.props,
            }
        }
    render(){
        return (
            <div className='Blog'>
                <article><div>12.03.18</div> cupidatat do veniam ullamco occaecat consectetur occaecat voluptate dolor. Pariatur deserunt et eiusmod veniam cillum magna cupidatat culpa incididunt Lorem labore. Quis aute elit cillum officia sunt fugiat irure labore non tempor. Reprehenderit proident incididunt officia magna.</article>
                <article><div>16.04.17</div>Duis id consectetur pariatur nostrud consequat voluptate voluptate est duis occaecat deserunt qui. Irure amet reprehenderit sint non proident aute ad exercitation quis dolor. Voluptate officia id esse occaecat exercitation sit labore minim est cupidatat. Eu labore amet laborum velit eiusmod voluptate quis.</article>
                <article><div>17.03.16</div>Laboris eu non laborum do laboris consectetur elit duis eu ut irure sunt eiusmod veniam. Cupidatat irure in sunt commodo nisi fugiat eu aute quis ullamco ea tempor cupidatat. Aliqua qui nostrud magna in aute officia sit sunt. Nisi cillum velit proident pariatur commodo nulla occaecat dolore officia. Occaecat culpa ad adipisicing eiusmod ipsum deserunt anim ea amet magna dolore laboris enim ea. Laborum aliquip nisi ipsum aliquip in excepteur deserunt nostrud pariatur nulla. Ipsum fugiat anim id laboris do amet est consequat duis ex anim do ex.</article>
                <article><div>12.08.15</div>Minim magna aute consequat pariatur aute ullamco officia qui qui et aliquip dolore tempor reprehenderit. Quis irure anim esse anim anim eiusmod ad sit ullamco nostrud officia. Ea labore aute sit culpa pariatur est id eu consectetur et nostrud fugiat. Amet consectetur sunt mollit occaecat tempor reprehenderit laboris ipsum amet minim cupidatat proident.</article>
                <article><div>25.03.14</div>Incididunt aliqua dolore velit cillum quis. Excepteur minim enim quis sunt quis culpa est deserunt do veniam reprehenderit sint magna. Occaecat ipsum aliqua ex velit anim quis commodo culpa labore commodo velit ea fugiat. Ullamco exercitation Lorem elit nulla ea cillum eu dolore esse.</article>
                <article><div>22.03.13</div>Qui cupidatat do veniam ullamco occaecat consectetur occaecat voluptate dolor. Pariatur deserunt et eiusmod veniam cillum magna cupidatat culpa incididunt Lorem labore. Quis aute elit cillum officia sunt fugiat irure labore non tempor. Reprehenderit proident incididunt officia magna.</article>
                <article><div>18.02.12</div>Duis id consectetur pariatur nostrud consequat voluptate voluptate est duis occaecat deserunt qui. Irure amet reprehenderit sint non proident aute ad exercitation quis dolor. Voluptate officia id esse occaecat exercitation sit labore minim est cupidatat. Eu labore amet laborum velit eiusmod voluptate quis.</article>
                <article><div>16.03.11</div>Laboris eu non laborum do laboris consectetur elit duis eu ut irure sunt eiusmod veniam. Cupidatat irure in sunt commodo nisi fugiat eu aute quis ullamco ea tempor cupidatat. Aliqua qui nostrud magna in aute officia sit sunt. Nisi cillum velit proident pariatur commodo nulla occaecat dolore officia. Occaecat culpa ad adipisicing eiusmod ipsum deserunt anim ea amet magna dolore laboris enim ea. Laborum aliquip nisi ipsum aliquip in excepteur deserunt nostrud pariatur nulla. Ipsum fugiat anim id laboris do amet est consequat duis ex anim do ex.</article>
                <article><div>31.04.10</div>Minim magna aute consequat pariatur aute ullamco officia qui qui et aliquip dolore tempor reprehenderit. Quis irure anim esse anim anim eiusmod ad sit ullamco nostrud officia. Ea labore aute sit culpa pariatur est id eu consectetur et nostrud fugiat. Amet consectetur sunt mollit occaecat tempor reprehenderit laboris ipsum amet minim cupidatat proident.</article>
                <article><div>15.05.09</div>Incididunt aliqua dolore velit cillum quis. Excepteur minim enim quis sunt quis culpa est deserunt do veniam reprehenderit sint magna. Occaecat ipsum aliqua ex velit anim quis commodo culpa labore commodo velit ea fugiat. Ullamco exercitation Lorem elit nulla ea cillum eu dolore esse.</article>
            </div>
        )
    }
    }
