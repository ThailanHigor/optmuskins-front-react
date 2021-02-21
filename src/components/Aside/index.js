import './index.css';
import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { useLocation } from "react-router-dom";

export default class Aside extends Component {
    
    state={
        route: ""
    }

    componentDidMount() {
        this.setState({route: window.location.pathname })
    }
    
    render() {
        const { route } = this.state;
        return (
            <div className="aside__container">
                <div className="content_desktop">
                    <div className="logo_container">
                        <a className="image_logo_link" href="/">
                            <img src='/assets/images/logo.png' alt="logo" />
                        </a>
                    </div>
                    <div className="menu_container">
                        <nav>
                            <ul>
                                <li className={route == "/" ? 'active' : ''}>
                                    <a href="/"><span>Home</span></a>
                                </li>
                                <li className={route.includes("/compare-skins") ? 'active' : ''} >
                                    <a href="/compare-skins"><span>Comparar Skins</span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="content_mobile">
                    <div className="content_fixed_top">
                        <div className="logo_container">
                            <a className="image_logo_link" href="/">
                                <img src='/assets/images/logo.png' alt="logo" />
                            </a>
                        </div>
                        <div className="menu_container">
                            <a href="javascript:void(0)">
                                <img src="/assets/icons/menu.svg" />
                            </a>
                        </div>
                    </div>

                    <Menu right isOpen={ false } width={ '100%' }>                                         
                        <a className={route == "/" ? 'active' : ''} href="/"><span>Home</span></a>
                        <a className={route.includes("/compare-skins") ? 'active' : ''}  href="/compare-skins"><span>Comparar Skins</span></a>
                    </Menu>
                </div>

            </div>
        );
    }

}
