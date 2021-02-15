import React, { Component } from 'react'
import './index.css';

import {
  ContentRight,
  Container,
  NavigateButton,
  NavigateSmallButton,
  Button
} from '../../globalStyled'

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
    loading: true,
    weapon_type_selected: null,
    weapon_selected: null,
    skin_selected: null,
    team: "CT",
    weapons_types: [],
    weapons: [],
    skins: [],
    priceTable: null,
    flag_is_knife_list_style: false,
    message: "Pra começar, escolha a categoria da skin",

  }

  async componentDidMount() {
    const response = await api.post("weapon_types");
    this.setState({ weapons_types: response.data.weapon_types, loading: false })
  }

  handleCallbackWeaponType = async (weapon_type) => {
    this.setState({ weapon_type_selected: weapon_type, loading: true })
    const response = await api.post("weapons", { weapon_type_id: weapon_type, team_name: this.state.team });

    this.setState({
      weapons: response.data.weapons,
      flag_is_knife_list_style: response.data.flag_knives,
      step: 2,
      message: response.data.message
    })

    this.timeOutLoading()
  }

  timeOutLoading = () => {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000);
  }

  handleCallbackWeapon = async (weapon_id, team_changed) => {
    const { weapon_type_selected } = this.state;
    if (team_changed) {
      this.setState({ team: team_changed })
      const response = await api.post("weapons", { weapon_type_id: weapon_type_selected, team_name: team_changed });
      this.setState({
        weapons: response.data.weapons,
        flag_is_knife_list_style: response.data.flag_knives,
        step: 2
      })
    }

    if (weapon_id) {
      this.setState({ weapon_selected: weapon_id, loading: true });
      const response = await api.post("skins", { weapon_id: weapon_id });
      this.setState({ skins: response.data.skins, step: 3, message: "Agora é so escolher a skin!" })

      this.timeOutLoading()
    }
  }

  handleCallbackSkins = async (skin_id) => {
    this.setState({ skin_selected: skin_id, loading: true, message: "Boa! Pera ae que eu tô buscando os preços... " });
    const response = await api.post("skins-price", { skin_selected_id: skin_id });
    this.setState({ priceTable: response.data, step: 4, loading: false, message: "Tá na mão. Se liga aí no comparativo dos preços!" });
  }

  backStep = () => {
    const { step } = this.state
    var stepBack = step - 1

    this.setState({ step: stepBack });
    //changed to default style if the user comes back to first step
    switch (stepBack) {
      case 1:
        this.setState({ flag_is_knife_list_style: false, message: "Pra começar, escolha a categoria da skin" })
        break;
      case 2:
        this.setState({ message: "Clique na arma de sua escolha" })
        break;
      case 3:
        this.setState({ message: "Agora é só escolher a skin" })
        break;
      default:
        break;
    }
  }

  checkAndShowCorrectSecondStep = (weapons) => {
    const { flag_is_knife_list_style, team, step } = this.state;
    if (flag_is_knife_list_style) {
      return <KnivesMenu itens={weapons} parentCallback={this.handleCallbackWeapon} typeRadial={"weapon"} />
    }
    return <RadialMenu step={step} itens={weapons} parentCallback={this.handleCallbackWeapon} typeRadial={"weapon"} team={team} />;
  }

  changeSteps = () => {
    const { weapons_types, weapons, skins, priceTable, step } = this.state;
    switch (this.state.step) {
      case 1: return <RadialMenu step={step} itens={weapons_types} parentCallback={this.handleCallbackWeaponType} typeRadial={"slot"} />;
      case 2: return this.checkAndShowCorrectSecondStep(weapons);
      case 3: return <SkinsListResult itens={skins} parentCallback={this.handleCallbackSkins} />;
      case 4: return <TablePrices data={priceTable} />;
      default: return <RadialMenu />;
    }
  }

  render() {
    const { weapon_type, weapon, step, loading, message, flag_is_knife_list_style } = this.state;
    return (
      <>
        <Aside />
        <ContentRight>
          <Container>
            {
              (!loading && step > 1 && step < 3)
                ? <NavigateButton src="/assets/icons/back.svg" onClick={() => this.backStep()} />
                : null
            }
            {
              ((!loading && step > 2) || (!loading && step > 1 && flag_is_knife_list_style))
                ? <NavigateSmallButton src="/assets/icons/back.svg" onClick={() => this.backStep()} />
                : null
            }

            <MessageTopBox message={message} />
            {
              (!loading && step > 2)
                ?   <Button onClick={() => this.setState({step: 1})}>Recomeçar Busca</Button>
                : null
            }
          
            {
              loading
                ? <Loading />
                : this.changeSteps()

            }
          </Container>
        </ContentRight>
        <Footer />
      </>
    );
  }
}

export default Home;
