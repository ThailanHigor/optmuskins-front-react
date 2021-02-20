import React, {Component, Link } from 'react';
import "./index.css";
import { H4 } from '../../globalStyled';
import SearchInput from '../SearchInput'

export default class KnivesMenu extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            originalItens: this.props.itens,
            itens: this.props.itens,
            showSearch: this.props.showSearch
        }
    }

    handleWeaponType = (weapon_id) => {
        this.props.parentCallback(weapon_id);
    }

    filterItens = search => {
        console.log(search)
        const { originalItens } = this.state;

        let itensFiltered = []
        originalItens.map((item, i) => {
            if(item.name.toLowerCase().includes(search)){
                itensFiltered.push(item)
            }
        })

        this.setState({itens: itensFiltered})
    }

    renderItens= itens => (
        itens.map((item, i) => (
            <div className="card" key={item.id} onClick={() => this.handleWeaponType(item.id)}>
                <div  className="card_inner">           
                    <span className="category">Facas</span>
                    <img src={`/assets/images/armasRadial/${item.image}`} alt={item.name} /> 
                    <H4>{item.name}</H4>
                </div>
            </div>
        ))  
    )


    render(){
        var { itens, showSearch } = this.state;
        
        return(
            <div className="knives_menu__container">
                {
                    showSearch
                    ?  <SearchInput parentCallback={this.filterItens}  />
                    : ""
                }
               
                <div className="content_list">
                    {this.renderItens(itens)}
                </div>
            </div>
        )
    }
    
}