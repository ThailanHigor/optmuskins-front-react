import './index.css';
import React, { Component } from 'react';

class SkinsListResult extends Component {
    handleSkinType = (skin_id) => {
        this.props.parentCallback(skin_id);
    }

    render() {
        var itens = this.props.itens;
        return (
            <div className="skins_list_result__container">
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