import './index.css';
import Aside from '../../components/Aside'
import MessageTopBox from '../../components/MessageTopBox'
import RadialMenu from '../../components/RadialMenu'
import Footer from '../../components/Footer'
import { ContentRight, Container } from '../../globalStyled'

function Home() {
  return (
    <>
      <Aside/>
      <ContentRight>
        <Container>
          <MessageTopBox/>
          <RadialMenu />
        </Container>
        <Footer/>
      </ContentRight>
    </>
  );
}

export default Home;
