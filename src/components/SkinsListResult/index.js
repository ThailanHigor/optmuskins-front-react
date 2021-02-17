import './index.css';
import React, { Component } from 'react';
import SearchInput from '../SearchInput'

class SkinsListResult extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            originalItens: this.props.itens,
            itens: this.props.itens,
        }
    }

    handleSkinType = (skin_id) => {
        this.props.parentCallback(skin_id);
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
    
    render() {
        const { itens, search } = this.state;
        return (
            <div className="skins_list_result__container">
                <SearchInput parentCallback={this.filterItens}  />
                <div className="content_list">
                    {
                        itens.map((item, i) => (
                            <div className="card" key={item.id} onClick={() => this.handleSkinType(item.id)} >
                                <div className="card_inner">
                                    <img src={`/assets/images/skins/${item.image}`} alt={item.name} />
                                    <div className="content_info">
                                        <span className="category">{item.category}</span>
                                        <span className="name">{item.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }

}

export default SkinsListResult;