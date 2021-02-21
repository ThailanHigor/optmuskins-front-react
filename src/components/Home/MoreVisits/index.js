import React, { Component } from 'react';
import "./index.css";
import { H4, Button } from '../../../globalStyled';
import api from "../../../services/api"
import Loading from '../../../components/Loading'

export default class MoreVisits extends Component {


    state = {
        itens: [],
        loading: true,
    }

    async componentDidMount() {
        const response = await api.get("skins");
        this.setState({
            itens: response.data.skins,
            loading: false
        })
    }
    

    renderItens = itens => (
        itens.map((item, i) => (
            <a className="card" key={item.id} href={`/compare-skins/${item.id}`}>
                    <span className="category">TOP {i+1}</span>
                <div className="card_inner">  
                    <H4 style={{filter: "drop-shadow(rgb(88, 33, 169) 0px 3px 0px)"}} >{item.weapon.name}</H4>
                    <img src={`/assets/images/skins/${item.image}`} alt={item.name} /> 
                    <H4 style={{filter: "drop-shadow(rgb(88, 33, 169) 0px 3px 0px)"}} >{item.name}</H4>
                </div>
            </a>
        ))
    )

    render() {
        var { itens, loading } = this.state;

        return (
            <div className="top5_list_container">
                <div className="message-top5__container">
                    <div className="content">
                        <p>Skins mais procuradas da semana</p>
                        <Button href="/compare-skins" >Ver outras skins</Button>
                    </div>
                </div>
                <div className="content_list">
                    {
                        loading
                        ? <Loading />
                        : this.renderItens(itens)
                    }
                 
                </div>
            </div>
        )
    }

}