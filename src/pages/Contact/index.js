import React, { Component } from 'react'

import {
    ContentRight,
    Container,
    Button
} from '../../globalStyled'

import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import MessageTopBox from '../../components/MessageTopBox'
import Banner from '../../components/Banner'

import './index.css';
import api from '../../services/api'
import Loading from '../../components/Loading'

export default class PrivacyPolicy extends Component {
    state={
        messageError: "Preencha todos os campos corretamente",
        message: "",
        name: "",
        email: "",
        error: false,
        success: false,
    }

    sendContact = async () =>{
        const {name, email, message} = this.state;
        if(!name || !email || !message){
            this.setState({error: true})
            return false
        }
        this.setState({loading: true})
        const response = await api.post("contact", { name: name, email: email, message: message });
        if(response.data.success){
            this.setState({success: true, loading: false})
        }else{
            this.setState({success: false, loading: false, messageError: "Ocorreu um erro. Tente novamente mais tarde"})
        }
    }


    renderForm = ({name, email, message, error, messageError}) => (
        <>
          <h3>Dúvidas, sugestões, elogios, críticas?<br/> Entre em contato conosco e responderemos antes da C4 explodir!</h3>
            <div className="contact__inner">
                <textarea placeholder="Passa a call aê" value={message} onChange={e => this.setState({message: e.target.value})}/>
                <div className="contact__box-input">
                    <input placeholder="Digite seu nome" value={name}  onChange={e => this.setState({name: e.target.value})}/>
                    <input type="email" placeholder="Seu melhor e-mail" value={email}  onChange={e => this.setState({email: e.target.value})}/>
                </div>
                <button onClick={() => this.sendContact()}>Enviar Mensagem</button>
                {
                    error
                    ? <small>{messageError}</small>
                    : ""
                }
                
            </div>
        </>
    )

    renderSucess = () => (
        <div className="message-contact">
            <p>Obrigado!</p>
            <p>Sua mensagem foi enviada.</p>
            <Button href="/">Voltar</Button>
        </div>
      
    )

    render() {
        const { success, loading } = this.state;
        return (
            <>
                <Aside />
                <ContentRight>
                    <Container>
                        <Banner/>
                        {
                            loading
                            ?   <Loading/>
                            :  <>
                                {
                                    success
                                    ? ""
                                    : <MessageTopBox message={"Contato"} />
                                }
                            
                                <div className="contact__container">
                                    {
                                        success
                                        ? this.renderSucess()
                                        : this.renderForm(this.state)         
                                    }
                                </div>
                            </>
                        }
                      
                    </Container>
                    <Footer />
                </ContentRight>
            </>
        )
    }
}
