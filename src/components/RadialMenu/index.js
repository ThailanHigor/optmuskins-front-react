import React, { Component } from 'react';
import './index.css';
import imageCenter from "../../assets/images/logoRadialCTTR.png";

/* eslint-disable jsx-a11y/anchor-is-valid */

class RadialMenu extends Component {

    handleWeaponType = (weapon_id) =>{
        this.props.parentCallback(weapon_id);
    }

    render() {
        return (
            <div className="radial-menu__container">
                <ul className="active">
                    <li> <a href="#" className="slot-1 radial-first-step" onClick={() => this.handleWeaponType(1)} ><span>Pistolas</span></a> </li>
                    <li><a href="#" className="slot-2 radial-first-step" onClick={() => this.handleWeaponType(2)}><span>Pesadas</span></a> </li>
                    <li><a href="#" className="slot-3 radial-first-step" onClick={() => this.handleWeaponType(3)}><span>SMGs</span></a></li>
                    <li><a href="#" className="slot-4 radial-first-step" onClick={() => this.handleWeaponType(4)}><span>Rifles</span></a></li>
                    <li><a href="#" className="slot-5 radial-first-step" onClick={() => this.handleWeaponType(5)}><span>Luvas</span></a></li>
                    <li><a href="#" className="slot-6 radial-first-step" onClick={() => this.handleWeaponType(6)}><span>Facas</span></a></li>

                    <li className="close"> <img src={imageCenter} alt="logo-radial" /> </li>
                </ul>
            </div>
        );
    }

}

export default RadialMenu;