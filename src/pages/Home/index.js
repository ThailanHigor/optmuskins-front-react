import React, { Component } from 'react'
import './index.css';

import {
  ContentRight,
  Container
} from '../../globalStyled'

import Banner from '../../components/Banner'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import MoreVisits from '../../components/Home/MoreVisits'
import MessageTopBox from '../../components/MessageTopBox'

class Home extends Component {
  render() {
    return (
      <>
        <Aside />
        <ContentRight>
          <Container className="Home__container">
            <Banner />
            <MessageTopBox message={'Skins mais procuradas no momento'} />
            <MoreVisits  />

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