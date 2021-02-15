import React, {Component} from 'react';
import './index.css';
/* eslint-disable jsx-a11y/anchor-is-valid */

export default class TablePrices extends Component {

    renderItens= (itens) => (
        itens.map((item, i) => (
            <tr key={i}>
                <th scope="row">{item.Float}</th>
                <td><a href={item.LinkBleik} className={item.PriceBleik != "-" ? "activable" : "" } target="_blank">{item.PriceBleik} <img src="/assets/icons/goto.svg" alt="bleik" /></a></td>
                <td><a href={item.LinkCSGOStore} className={item.PriceCSGOStore != "-" ? "activable" : "" }  target="_blank">{item.PriceCSGOStore} <img src="/assets/icons/goto.svg" alt="bleik" /> </a></td>
                <td><a href={item.LinkNesha} className={item.PriceNesha != "-" ? "activable" : "" }  target="_blank">{item.PriceNesha} <img src="/assets/icons/goto.svg" alt="bleik" /> </a></td>
                <td><a href={item.LinkSteam} className={item.PriceSteam != "-" ? "activable" : "" }  target="_blank">{item.PriceSteam} <img src="/assets/icons/goto.svg" alt="bleik" /> </a></td>
            </tr>
        ))  
    )


    render(){
        var { data } = this.props;
        return (
            <div className="table_prices_result__container">                
                <div className="content_info">                  
                    <img src={`/assets/images/skins/${data.image}`} alt={data.name} />                    
                    <h3 className="name">{data.name}</h3>    
                </div>
                <div className="table_comparation">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col" className="coluna-logo">
                                    <img src="/assets/images/bleikstore.png" className="image-logo" alt="bleik" />
                                </th>
                                <th scope="col" className="coluna-logo">
                                    <img src='/assets/images/csgostore.png' className="image-logo" alt="csgostore"/>
                                </th>
                                <th scope="col" className="coluna-logo">
                                    <img src='/assets/images/neshastore.png' className="image-logo" alt="nesha"/>
                                </th>
                                <th scope="col" className="coluna-logo">
                                    <img src='/assets/images/steam.svg' className="image-logo" alt="steam"/>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderItens(data.prices_normals)}
                            <tr><td><br/><br/></td></tr>
                            {this.renderItens(data.price_stattrak)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}