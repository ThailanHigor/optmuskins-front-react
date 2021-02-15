import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import './index.css';
/* eslint-disable jsx-a11y/anchor-is-valid */

class RadialMenu extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            changed: false
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

    renderItem = (item, index, typeRadial)=> (
        <a href="#" onClick={() => this.handleWeaponType(item.id)} className={`${typeRadial}-${index + 1} radial-first-step`}>
            {
                item.image != null
                    ? <img className="arma-radial" src={`/assets/images/armasRadial/${item.image}`} alt=""></img>
                    : ""
            }
            <span>{item.name}</span>
        
        </a>
    )
    renderItens = (itens, typeRadial) => (
        itens.map((item, index) => (
            <li key={item.id}>
                {
                    (this.state.changed && item.variable && item.variable.id != 0) 
                    ?  this.renderItem(item.variable, index, typeRadial)
                    :  this.renderItem(item, index, typeRadial)
                }

                {
                    (item.variable && item.variable.id != 0) 
                    ? <img class="change"  onClick={() => this.setState({changed: !this.state.changed})} src="/assets/icons/change.png" />
                    : ""
                }
               
            </li>
        ))
    )
    
    renderFlipTeam = team  =>(

            team
            ?   <li className="close logo-team-radial"> 
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                        <img onClick={() => this.handleChangeTeam("TR")} src={`/assets/images/logoRadialCT.png`} alt="logo-radial" /> 
                        <img onClick={() => this.handleChangeTeam("CT")} src={`/assets/images/logoRadialTR.png`} alt="logo-radial" /> 
                    </ReactCardFlip>
                </li>
            :   <li className="close logo-team-radial"> <img src="/assets/images/logoRadialCTTR.png" alt="logo-radial" /> </li>
       
    )


    renderBoxRightOptions = team =>(
        <div className="box_options__container">
            <div className="content">
            <p>Opções de Busca</p>
            <hr/>
            <div className="option">
                {this.renderFlipTeam(team)}
                <p>Trocar time</p>
            </div>
            <div className="option"  onClick={() => this.setState({changed: !this.state.changed})} >
                <img class="change" src="/assets/icons/change.png" />
                <p>Arma alternativa</p>
            </div>
            </div>
        </div>
    )

    render() {
        var { itens, typeRadial, team, step } = this.props;

        return (
            <div className="radial-menu__container">
                <ul className="active">
                    {this.renderItens(itens, typeRadial)}

                    {
                        itens.length < 6
                            ? <li> <a href="#" className={`slot-6 radial-first-step`}></a> </li>
                            : <></>
                    }

                    {this.renderFlipTeam(team)}
                </ul>
            {
                step > 1 
                ? this.renderBoxRightOptions(team)
                : ""
            }
                

            </div>
        );
    }

}

export default RadialMenu;