import React, { Component } from 'react'

import {
    ContentRight,
    Container
} from '../../globalStyled'

import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import MessageTopBox from '../../components/MessageTopBox'

import './index.css';

export default class PrivacyPolicy extends Component {
    state = {
        name: "OptmuSkins",
        email: "email@email.com.br"
    }
    render() {
        return (
            <>
                <Aside />
                <ContentRight>
                    <Container className="privacy__container">
                        <MessageTopBox message={"Política de Privacidade"} />
                        <div className="privacy__inner">
                            <h3>1. Informações Gerais</h3>
                            <p>A presente Política de Privacidade contém informações sobre coleta, uso,
                            armazenamento, tratamento e proteção dos dados pessoais dos usuários e
                                visitantes do site <b>{this.state.name}</b>, com a finalidade de demonstrar
                                absoluta transparência quanto ao assunto e esclarecer a todos interessados sobre
                                os tipos de dados que são coletados, os motivos da coleta e a forma como os
                                usuários podem gerenciar ou excluir as suas informações pessoais.
                            </p>
                            <br />
                            <p>
                                Esta Política de Privacidade aplica-se a todos os usuários e visitantes do site <b>{this.state.name}</b> e
                                integra os Termos e Condições Gerais de Uso do site, doravante nominada <b>{this.state.name}</b>.
                            </p>
                            <br />
                            <p>
                                O presente documento foi elaborado em conformidade com a Lei Geral de Proteção de
                                Dados Pessoais (Lei <a href="https://www.jusbrasil.com.br/legislacao/612902269/lei-13709-18" title="LEI Nº 13.709, DE 14 DE AGOSTO DE 2018.">13.709</a>/18),
                                o <a href="https://www.jusbrasil.com.br/legislacao/117197216/lei-12965-14" title="LEI Nº 12.965, DE 23 ABRIL DE 2014.">Marco Civil da Internet</a>
                                (Lei <a href="https://www.jusbrasil.com.br/legislacao/117197216/lei-12965-14" title="LEI Nº 12.965, DE 23 ABRIL DE 2014.">12.965</a>/14)
                                (e o Regulamento da UE n. 2016/6790). Ainda, o documento poderá ser atualizado em decorrência de eventual atualização normativa,
                                razão pela qual se convida o usuário a consultar periodicamente esta seção
                            </p>
                            <br />


                            <h3>2. Dados Pessoais do usuário/visitante</h3>
                            <p>
                                Quando o usuário envia um contato através do presente site, seus dados serão armazenados em nosso banco de dados
                                para posterior resposta e histórico. E seu e-mail poderá ser utilizado para envios de emails e respostas.
                                O <b>{this.state.name}</b> jamais irá compartilhar, repassar ou distribuir esses dados. O usuário poderá solicitar através de nosso e-mail a remoção desses dados de nossa base
                                a qualquer momento, tendo estabelecido um prazo de remoção de 5 (cinco) dias após a solicitação do mesmo.
                            </p>
                            <br />
                            <p>
                                O <b>{this.state.name}</b>  não coleta ou armazenados nenhum tipo de dado sensível como origem étnica ou racial, opinião política,
                                convicção religiosa, dados genéticos, dados relativos à saúde, orientação sexual. Somente o nome e e-mail poderão ser coletados em nosso formulário de contato.
                            </p>
                            <br />


                            <h3>3. Por quanto tempo os dados pessoais ficam armazenados?</h3>
                            <p>Os dados pessoais do usuário e visitante são armazenados pela plataforma durante o período
                            necessário para a prestação do serviço ou o cumprimento das finalidades previstas no presente documento,
                                conforme o disposto no inciso <a href="https://www.jusbrasil.com.br/topicos/200399061/inciso-i-do-artigo-15-da-lei-n-13709-de-14-de-agosto-de-2018"> I </a>
                                do artigo <a href="https://www.jusbrasil.com.br/topicos/200399064/artigo-15-da-lei-n-13709-de-14-de-agosto-de-2018" >15</a> da Lei <a href="https://www.jusbrasil.com.br/legislacao/612902269/lei-13709-18">13.709</a>/18.
                            </p>
                            <br />
                            <p>Os dados podem ser removidos ou anonimizados a pedido do usuário, excetuando os casos em que a lei oferecer outro tratamento.</p>
                            <br />


                            <h3>4. Segurança dos Dados Pessoais Armazenados</h3>
                            <p>
                                A plataforma se compromete a aplicar as medidas técnicas e
                                organizativas aptas a proteger os dados pessoais de acessos não autorizados e de
                                situações de destruição, perda, alteração, comunicação ou difusão de tais dados.
                            </p>
                            <br />
                            <p>
                                A plataforma não se exime de responsabilidade por culpa exclusiva de terceiro,
                                como em caso de ataque de hackers ou crackers, ou culpa exclusiva do usuário,
                                como no caso em que ele mesmo transfere seus dados a terceiros. O site se compromete
                                a comunicar o usuário em caso de alguma violação de segurança dos seus dados pessoais.
                            </p>
                            <br />
                            <p>
                                Os dados pessoais armazenados são tratados com confidencialidade, dentro dos limites legais.
                                No entanto, podemos divulgar suas informações pessoais caso sejamos obrigados pela lei para fazê-lo ou se você violar nossos Termos de Uso.
                            </p>


                            <br />
                            <h3>5. Cookies ou Dados de Navegação</h3>
                            <p>
                                Os cookies referem-se a arquivos de texto enviados pela plataforma ao computador do usuário e
                                visitante e que nele ficam armazenados, com informações relacionadas à navegação no site.
                                Tais informações são relacionadas aos dados de acesso como local e horário de acesso e são
                                armazenadas pelo navegador do usuário e visitante para que o servidor da plataforma possa
                                lê-las posteriormente a fim de personalizar os serviços da plataforma.
                            </p>
                            <br />
                            <p>
                                O usuário e o visitante da plataforma <b>{this.state.name}</b> manifesta conhecer e aceitar que pode ser utilizado um sistema
                                de coleta de dados de navegação mediante à utilização de cookies.
                            </p>
                            <br />
                            <p>
                                O cookie persistente permanece no disco rígido do usuário e visitante depois que o navegador é fechado e
                                será usado pelo navegador em visitas subsequentes ao site. Os cookies persistentes podem ser removidos
                                seguindo as instruções do seu navegador. Já o cookie de sessão é temporário e desaparece depois que o navegador é fechado.
                                É possível redefinir seu navegador da web para recusar todos os cookies, porém alguns recursos da plataforma podem não
                                funcionar corretamente se a capacidade de aceitar cookies estiver desabilitada.
                            </p>


                            <br />
                            <h3>6. Consentimento</h3>
                            <p>
                                Ao utilizar os serviços e fornecer as informações pessoais na plataforma,
                                o usuário está consentindo com a presente Política de Privacidade.
                            </p>
                            <br />
                            <p>
                                O usuário, ao cadastrar-se, manifesta conhecer e pode exercitar seus direitos de
                                cancelar seu cadastro, acessar e atualizar seus dados pessoais e garante a
                                veracidade das informações por ele disponibilizadas.
                            </p>
                            <br />
                            <p>
                                O usuário tem direito de retirar o seu consentimento a qualquer tempo,
                                para tanto deve entrar em contato através do e-mail{this.state.email}
                            </p>



                            <br />
                            <h3>7. Alterações desta política de privacidade</h3>
                            <p>
                                Reservamos o direito de modificar essa Política de Privacidade a
                                qualquer momento, então, é recomendável que o
                                usuário e visitante revise-a com frequência.
                                </p>
                            <br />
                            <p>
                                As alterações e esclarecimentos vão surtir efeito imediatamente
                                após sua publicação na plataforma. Quando realizadas alterações
                                os usuários serão notificados. Ao utilizar o serviço ou fornecer
                                informações pessoais após eventuais modificações, o usuário e
                                visitante demonstra sua concordância com as novas normas.
                                </p>
                            <br />
                            <p>
                                Diante da fusão ou venda da plataforma à outra empresa os dados
                                dos usuários podem ser transferidas para os novos proprietários
                                para que a permanência dos serviços oferecidos.
                            </p>

                            <br />
                            <h3>8. Jurisdição para Resolução de conflitos</h3>
                            <p>Para a solução de controvérsias decorrentes do presente instrumento será aplicado integralmente o Direito brasileiro.</p>
                            <br />
                            <br />
                            <p>Esta Política de Privacidade é válida a partir do dia 10 de janeiro de 2021.</p>
                            <br />
                            <br />
                        </div>

                    </Container>
                    <Footer />
                </ContentRight>
            </>
        )
    }
}
