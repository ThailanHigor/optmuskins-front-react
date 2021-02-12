import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import './index.css';

/* eslint-disable jsx-a11y/anchor-is-valid */

class RadialMenu extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleChangeTeam = this.handleChangeTeam.bind(this);
    }

    handleChangeTeam(team_changed) {
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        this.props.parentCallback(null, team_changed);
    }

    handleWeaponType = (weapon_id) => {
        this.props.parentCallback(weapon_id);
    }

    renderItens = (itens, typeRadial) => (
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
        var { itens, typeRadial, team } = this.props;

        return (
            <div className="radial-menu__container">
                <ul className="active">
                    {this.renderItens(itens, typeRadial)}

                    {
                        itens.length < 6
                            ? <li> <a href="#" className={`slot-6 radial-first-step`}></a> </li>
                            : <></>
                    }
                    {
                        team
                            ? <li className="close logo-team-radial"> 
                                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                                    <img onClick={() => this.handleChangeTeam("TR")} src={`/assets/images/logoRadialCT.png`} alt="logo-radial" /> 
                                    <img onClick={() => this.handleChangeTeam("CT")} src={`/assets/images/logoRadialTR.png`} alt="logo-radial" /> 
                                </ReactCardFlip>
                            </li>
                            : <li className="close logo-team-radial"> <img src="/assets/images/logoRadialCTTR.png" alt="logo-radial" /> </li>
                    }

                </ul>
            </div>
        );
    }

}

export default RadialMenu;