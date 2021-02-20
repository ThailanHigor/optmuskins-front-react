import React, { Component } from 'react';
import "./index.css";
import { H4 } from '../../../globalStyled';
import SearchInput from '../../SearchInput'

export default class MoreVisits extends Component {
    state = {
        itens: [
            {
                "id": 1,
                "name": "Aquamarine Revenge",
                "weaponType_id": 0,
                "slug": "aquamarine-revenge",
                "filter_term": null,
                "image": "/ak-47/aquamarine-revenge.png",
                "category": "Rifles"
            },
            {
                "id": 2,
                "name": "Asiimov",
                "weaponType_id": 0,
                "slug": "asiimov",
                "filter_term": null,
                "image": "/ak-47/asiimov.png",
                "category": "Rifles"
            },
            {
                "id": 8,
                "name": "Case Hardened",
                "weaponType_id": 0,
                "slug": "case-hardened",
                "filter_term": null,
                "image": "/ak-47/case-hardened.png",
                "category": "Rifles"
            },
            {
                "id": 4,
                "name": "Black Laminate",
                "weaponType_id": 0,
                "slug": "black-laminate",
                "filter_term": null,
                "image": "/ak-47/black-laminate.png",
                "category": "Rifles"
            },
            {
                "id": 5,
                "name": "Bloodsport",
                "weaponType_id": 0,
                "slug": "bloodsport",
                "filter_term": null,
                "image": "/ak-47/bloodsport.png",
                "category": "Rifles"
            }
        ]
    }

    renderItens = itens => (
        itens.map((item, i) => (
            <a className="card" key={item.id} href={`/compare-skins/${item.id}`}>
                    <span className="category">TOP {i+1}</span>
                <div className="card_inner">  
                    <img src={`/assets/images/skins/${item.image}`} alt={item.name} /> 
                    <H4 style={{filter: "drop-shadow(2px 4px 0px #5821a9)"}} >{item.name}</H4>
                </div>
            </a>
        ))
    )

    render() {
        var { itens } = this.state;

        return (
            <div className="top5_list_container">
                <div className="content_list">
                    {this.renderItens(itens)}
                </div>
            </div>
        )
    }

}