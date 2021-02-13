import React, { Component } from 'react'
import './index.css';

import { ContentRight, Container, Button } from '../../globalStyled'

import Aside from '../../components/Aside'
import MessageTopBox from '../../components/MessageTopBox'
import RadialMenu from '../../components/RadialMenu'
import KnivesMenu from '../../components/KnivesMenu'
import SkinsListResult from '../../components/SkinsListResult'
import TablePrices from '../../components/TablePrices'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'

import api from '../../services/api'

class Home extends Component {

  state = {
    step: 1,
    loading: false,
    weapon_type_selected: null,
    weapon_selected: null,
    skin_selected: null,
    team: "CT",
    weapons_types: [],
    weapons: [],
    skins: [],
    priceTable: null,
    flag_is_knife_list_style: false,
    
  }

  async componentDidMount() {
    const response = await api.post("weapon_types");
    this.setState({ weapons_types: response.data.weapon_types })
  }

  handleCallbackWeaponType = async (weapon_type) => {
    this.setState({ weapon_type_selected: weapon_type })
    const response = await api.post("weapons", { weapon_type_id: weapon_type, team_name: this.state.team });
    this.setState({ weapons: response.data.weapons, flag_is_knife_list_style: response.data.flag_knives,  step: 2 })
  }

  handleCallbackWeapon = async (weapon_id, team_changed) => {
    const {weapon_type_selected } = this.state;
    if(team_changed){
      this.setState({ team: team_changed })
      const response = await api.post("weapons", { weapon_type_id: weapon_type_selected, team_name: team_changed });
      this.setState({ weapons: response.data.weapons, flag_is_knife_list_style: response.data.flag_knives, step: 2 })
    }

    if(weapon_id){
      this.setState({ weapon_selected: weapon_id });
      const response = await api.post("skins", { weapon_id: weapon_id });
      this.setState({ skins: response.data.skins, step: 3 })
    }
  }

  handleCallbackSkins = async (skin_id) => {
    this.setState({ skin_selected: skin_id, loading: true });
    const response = await api.post("skins-price", { skin_selected_id: skin_id });
    this.setState({ priceTable: response.data, step: 4, loading: false });
  }

  backStep = () => {
    const {step} = this.state
    var stepBack = step - 1

    this.setState({ step: stepBack });
    //changed to default style if the user comes back to first step
    if(stepBack == 1){
      this.setState({ flag_is_knife_list_style: false }) 
    }
  }

  checkAndShowCorrectSecondStep = (weapons) => {
    const { flag_is_knife_list_style, team } = this.state;
    if(flag_is_knife_list_style){
      return <KnivesMenu itens={weapons} parentCallback={this.handleCallbackWeapon} typeRadial={"weapon"} />
    }
    return <RadialMenu itens={weapons} parentCallback={this.handleCallbackWeapon} typeRadial={"weapon"} team={team} />;
  }

  changeSteps = () => {
    const { weapons_types, weapons, skins, priceTable } = this.state;
    switch (this.state.step) {
      case 1: return <RadialMenu itens={weapons_types} parentCallback={this.handleCallbackWeaponType} typeRadial={"slot"}  />;
      case 2: return this.checkAndShowCorrectSecondStep(weapons);
      case 3: return <SkinsListResult itens={skins} parentCallback={this.handleCallbackSkins} />;
      case 4: return <TablePrices data={priceTable} />;
      default: return <RadialMenu />;
    }
  }

  render() {
    const { weapon_type, weapon, step, loading } = this.state;
    return (
      <>
        <Aside />
        <ContentRight>

          <Container>
            {
              step > 1
                ? <Button onClick={() => this.backStep()}>Voltar</Button>
                : null
            }

            <MessageTopBox message="primeiro, escolha a categoria da skin" />
            {
              loading
                ? <Loading />
                : this.changeSteps()

            }
          </Container>
          <Footer />
        </ContentRight>
      </>
    );
  }
}

export default Home;
