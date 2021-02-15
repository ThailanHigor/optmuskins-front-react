import React, { Component } from 'react'
import './index.css';

import {
    ContentRight,
    Container
} from '../../globalStyled'

import Banner from '../../components/Banner'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'

class Home extends Component {
    render() {
        return (
            <>
                <Aside />
                <ContentRight>
                    <Container>
                        <Banner />
                    </Container>
                    <Footer />
                </ContentRight>
            </>
        );
    }
}

export default Home;