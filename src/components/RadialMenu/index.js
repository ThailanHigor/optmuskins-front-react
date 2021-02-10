import React, { Component } from 'react';
import './index.css';

/* eslint-disable jsx-a11y/anchor-is-valid */

class RadialMenu extends Component {

    handleWeaponType = (weapon_id) => {
        this.props.parentCallback(weapon_id);
    }

    renderItens= (itens, typeRadial) => (
        itens.map((item, i) => (
            <li key={item.id}>
                <a href="#" onClick={() => this.handleWeaponType(item.id)} className={`${typeRadial}-${i + 1} radial-first-step`}>
                    {
                        item.image != null
                            ? <img className="arma-radial" src={`/assets/images/armasRadial/${item.image}`} alt=""></img>
                            : ""
                    }

                    <span>{item.name}</span>
                </a>
            </li>
        ))  
    )

    render() {
        var { itens, typeRadial } = this.props;
        
        return (
            <div className="radial-menu__container">
                <ul className="active">
                    { this.renderItens(itens, typeRadial) }

                    {
                        itens.length < 6
                            ? <li> <a href="#" className={`slot-6 radial-first-step`}></a> </li>
                            : <></>
                    }

                    <li className="close"> <img src="/assets/images/logoRadialCTTR.png" alt="logo-radial" /> </li>
                </ul>
            </div>
        );
    }

}

export default RadialMenu;