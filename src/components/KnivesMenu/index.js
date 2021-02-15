import React, {Component} from 'react';
import "./index.css";
import { H4 } from '../../globalStyled';

export default class KnivesMenu extends Component{

    handleWeaponType = (weapon_id) => {
        this.props.parentCallback(weapon_id);
    }

    renderItens= itens => (
        itens.map((item, i) => (
            <div className="card" key={item.id}  onClick={() => this.handleWeaponType(item.id)}>
                <div className="card_inner">
                    <span className="category">Facas</span>
                    <img src={`/assets/images/armasRadial/${item.image}`} alt={item.name} />
                    <H4>{item.name}</H4>
                </div>
            </div>
        ))  
    )


    render(){
        var { itens } = this.props;
        
        return(
            <div className="knives_menu__container">
                <div className="content_list">
                    {this.renderItens(itens)}
                </div>
            </div>
        )
    }
    
}