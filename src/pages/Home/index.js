import React, {Component} from 'react'
import './index.css';

import { ContentRight, Container } from '../../globalStyled'

import Aside from '../../components/Aside'
import MessageTopBox from '../../components/MessageTopBox'
import RadialMenu from '../../components/RadialMenu'
import KnivesMenu from '../../components/KnivesMenu'
import SkinsListResult from '../../components/SkinsListResult'
import TablePrices from '../../components/TablePrices'
import Footer from '../../components/Footer'

import api from '../../services/api'

class Home extends Component {
  
  state = {
    step: 1,
    weapon_type: null,
    weapon: null,
    weapons: []
  }

  handleCallbackWeaponType = async (weapon_type) =>{
    this.setState({weapon_type: weapon_type, step:2})
    const response = await api.post("steps/getWeaponsByCategory", {weapon_type_id: weapon_type});
    console.log(response)
  } 

  handleCallbackWeapon = (weapon) =>{
    this.setState({weapon: weapon, step:3})
  } 

  changeSteps = () => {
    switch(this.state.step) {
      case 1:  return <RadialMenu parentCallback={this.handleCallbackWeaponType} />;
      case 2:  return <RadialMenu parentCallback={this.handleCallbackWeapon} />;
      case 3:  return <SkinsListResult />;
      case 4:  return <TablePrices />;
      default: return <RadialMenu />;
    }
  }

  render(){
    const {weapon_type, weapon} = this.state;
    return (
      <>
        <Aside/>
        <ContentRight>
          <p>Tipo: {weapon_type}</p>
          <p>Arma: {weapon}</p>
          <Container>
            <MessageTopBox message="primeiro, escolha a categoria da skin" />
            {this.changeSteps()}
          </Container>
          <Footer/>
        </ContentRight>
      </>
    );
  }
}

export default Home;
