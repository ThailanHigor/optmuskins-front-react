import './index.css';
import React, { Component } from 'react';

export default class SearchInput extends Component {

    state = {
        search: ""
    }

    handleInput(event){
        this.props.parentCallback(event.target.value.toLowerCase());
        this.setState({search: event.target.value.toLowerCase()})
    }

    render() {
        return (
            <div className="search_input__container">
                <input value={this.state.search} placeholder="Buscar pelo nome da skin" onChange={this.handleInput.bind(this)} />
                <img src="/assets/icons/search.svg" />
            </div>
        );
    }

}
