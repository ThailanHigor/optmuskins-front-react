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
import Card from '../../components/3dCard'

class Home extends Component {
  render() {
    return (
      <>
        <Aside />
        <ContentRight>
          <Container className="Home__container">
            <Banner />
            <MoreVisits />
            <div className="banner_mid__container">
              <div className="banner_mid_content_mobile">
                <Card/>
              </div>
              <div className="banner_mid_content" style={{ backgroundImage: 'url("/assets/images/bg-mid.png")' }}>
                <Card/>
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