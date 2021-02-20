import React, { Component } from 'react'
import './index.css';

import {
  ContentRight,
  Container
} from '../../globalStyled'

import Banner from '../../components/Banner'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import KnivesMenu from '../../components/KnivesMenu'
import MessageTopBox from '../../components/MessageTopBox'

class Home extends Component {
  state = {
    hot_weapons: [
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
  render() {
    return (
      <>
        <Aside />
        <ContentRight>
          <Container className="Home__container">
            <Banner />
            <MessageTopBox message={'Skins mais procuradas no momento'} />
            <KnivesMenu itens={this.state.hot_weapons} changePath={true} RemoveCategory={true} />

            <div className="banner_mid__container">
              <div className="banner_mid_content" style={{backgroundImage: 'url("/assets/images/bg-mid.png")'}}>
                  <a href="/compare-skins">
                    <span>Compare os preços</span>
                  </a> 
              </div>
            </div>

          </Container>
          <Footer />
        </ContentRight>
      </>
    );
  }
}

export default Home;