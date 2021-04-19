import React, { Component } from 'react'

import {
    ContentRight,
    Container
} from '../../globalStyled'

import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import MessageTopBox from '../../components/MessageTopBox'

import './index.css';

export default class TermsOfService extends Component {
    state = {
        name: "Skin Matcher",
        email: "devthailan@gmail.com.br"
    }
    render() {
        return (
            <>
                <Aside />
                <ContentRight>
                    <Container className="terms__container">
                        <MessageTopBox message={"Termos e condições de uso"} />
                        <div className="terms__inner">
                            <h3>1. Do objeto</h3>
                            
                            <p>Intitula-se neste termo, as lojas virtuais NeshaStore, BleikStore, CSGO Store, Steam como  <b>Sites Terceiros</b>.</p>
                            <br/>
                            <p>
                                A plataforma caracteriza-se pela prestação do seguinte serviço:
                                comparação de preços de produtos virtuais (denominado <b>Skins</b>), e redirecionamento do usuário para os <b>Sites Terceiros</b>.
                            </p>
                            <br />
                            <p>
                                Este site utiliza-se da raspagem de dados (Web Scraping) para exibição das skins e comparações apresentadas. <br/>
                                A ação é realizada em tempo de execução, portanto nenhum dado de site terceiro é armazenado em nossa base de dados.
                            </p>
                            <br />
                            <p>A {this.state.name} não possui qualquer tipo de vínculo com a NeshaStore, BleikStore, CSGO Store, Steam, Valve Corporation e suas afiliadas. </p>                           
                            <br/>

                            <p><b>
                                A {this.state.name} assegura que, no momento da escrita do presente termo, os termos de uso dos Sites Terceiros não continham nenhuma
                                restrição e/ou proibição legal referente à raspagem de dados (web scraping) portanto utilizou-se deste recurso. Qualquer mudança nos termos dos sites terceiros
                                posterior à data deste termo não tem efeito judicial à {this.state.name}. Assegura ainda que, se futuramente tal proibição for acrescentada nos termos dos sites terceiros, 
                                a {this.state.name} está completamente de acordo e compromete-se em interromper tal ação de raspagem de dados mediante solicitação simples via e-mail ou formulário de contato presente no site.
                                </b>
                            </p>

                            <br />
                            <h3>2. Da aceitação</h3>
                            <p>
                                O presente Termo estabelece obrigações contratadas de livre e
                                espontânea vontade, por tempo indeterminado, entre a plataforma e
                                as pessoas físicas ou jurídicas, usuárias do site.
                            </p>
                            <p>
                                Ao utilizar a plataforma o usuário aceita integralmente as presentes normas e
                                compromete-se a observá-las, sob o risco de aplicação das penalidade cabíveis.
                            </p> <br />
                            <p>
                                A aceitação do presente instrumento é imprescindível para o acesso e para a utilização
                                de quaisquer serviços fornecidos pela empresa. Caso não concorde
                                com as disposições deste instrumento, o usuário não deve utilizá-los.
                            </p>
                            <br />



                            <h3>3. Do acesso dos usuários</h3>
                            <p>
                                Serão utilizadas todas as soluções técnicas à disposição do responsável pela plataforma
                                para permitir o acesso ao serviço 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana.
                                No entanto, a navegação na plataforma ou em alguma de suas páginas poderá ser interrompida,
                                limitada ou suspensa para atualizações, modificações ou qualquer ação necessária ao seu bom funcionamento.
                            </p>
                            <br />



                            <h3>4. Dos serviços ou produtos</h3>
                            <p>
                                A plataforma poderá disponibilizar para o usuário um conjunto específico
                                de funcionalidades e ferramentas para otimizar o uso dos serviços e produtos.
                            </p>
                            <br />
                            <p>
                                Na plataforma os serviços ou produtos oferecidos estão descritos e apresentados com o maior grau de exatidão,
                                contendo informações sobre suas características, qualidades, quantidades, composição, preço, garantia,
                                prazos de validade e origem, entre outros dados, bem como sobre os riscos que apresentam à saúde e segurança do usuário.
                            </p>
                            <br />
                            <p>Todas as imagens do site referentes aos produtos comercializados são meramente ilustrativas. </p>
                            <br/>
                            <p>
                                A {this.state.name} é somente responsável pela divulgação e comparação dos preços de skins das lojas virtuais terceiras. 
                                <br /><br/><b>Sendo assim, a {this.state.name} não se responsabiliza por:</b>
                            </p>
                            <br />
                            <p>a) compras ou vendas realizadas nos sites de terceiros que tenham sido provenientes deste site;</p>
                            <p>b) qualquer problema que envolva o site terceiro a qual o usuario foi destinado;</p>
                            <p>c) pagamentos e dados sensiveis solicitados e/ou armazenados em sites terceiros;</p>
                            <p>d) preços das skins divulgados no site;</p>
                            <p>e) indisponibilidade ou problemas técnicos do site terceiro; </p>

                            <br />
                            <p><b>É de responsabilidade da plataforma {this.state.name} perante os sites terceiros e usuários:</b></p>
                            <br />
                            <p>a) exibir o preço correto e integro dos produtos apresentados nas buscas, sem qualquer alteração ou manipulação, manual ou automática, dos valores apresentados;</p>
                            <p>b) exibir os preços atuais e inteiros, ou seja, sem descontos ou beneficios que possam inviabilizar ou dar vantagens no momento da busca do usuário; </p>
                            <p>c) assegurar que os sites terceiros não sejam prejudicados por ações que sejam provenientes deste site, 
                                podendo ser contatado a qualquer momento pela responsável do site e assim interromper a pratica tais ações que estejam comprometedo ou prejudicando o mesmo.
                            </p>
                            <p>d) propocionar igualdade na comparação dos preços, salvo em casos onde houver uma contração de um destaque em nosso site, por parte de algum dos sites terceiros.</p>



                            <br />
                            <h3>5. Do Suporte</h3>
                            <p>Em caso de qualquer dúvida, sugestão ou problema com a utilização da plataforma, o usuário poderá entrar em contato com o suporte, através do email <b>{this.state.email}</b>.</p>
                            <p>Estes serviços de atendimento ao usuário estarão disponíveis nos seguintes dias e horários: segunda-feira a sexta-feira, de 11:00 até 18:30.</p>


                            <br />
                            <h3>6. Das responsabilidades</h3>
                            <p><b>É de responsabilidade do usuário:</b></p>
                            <br />
                            <p>a) defeitos ou vícios técnicos originados no próprio sistema do usuário;</p>
                            <p>b) a correta utilização da plataforma, dos serviços ou produtos oferecidos,
                            prezando pela boa convivência, pelo respeito e cordialidade entre os usuários;
                            </p>
                            <p>c) pelo cumprimento e respeito ao conjunto de regras disposto nesse Termo de Condições Gera de Uso,
                            na respectiva Política de Privacidade e na legislação nacional e internacional;
                            </p>
                            <br />
                            <p><b>É de responsabilidade da plataforma {this.state.name}:</b></p>
                            <br />
                            <p>a) indicar as características do serviço;</p>
                            <p>b) os defeitos e vícios encontrados no serviço oferecido desde que lhe tenha dado causa;</p>
                            <p>c) interromper imediadamente o web scraping executado nos sites terceiros, mediante solicitação dos mesmos. </p>
                            <br />
                            <p>A plataforma não se responsabiliza por links externos contidos em seu sistema que possam redirecionar o usuário à ambiente externo a sua rede. </p>
                            <p>Não poderão ser incluídos links externos ou páginas que sirvam para fins comerciais ou
                            publicitários ou quaisquer informações ilícitas, violentas, polêmicas, pornográficas, xenofóbicas, discriminatórias ou ofensivas.
                            </p>


                            <br />
                            <h3>7. Dos direitos autorais</h3>
                            <p>
                                O presente Termo de Uso concede aos usuários uma licença não exclusiva,
                                não transferível e não sublicenciável, para acessar e fazer uso da plataforma
                                e dos serviços e produtos por ela disponibilizados.
                            </p>
                            <br />
                            <p>
                                A estrutura do site ou aplicativo, as marcas, logotipos, nomes comerciais, layouts, gráficos e design de interface,
                                imagens, ilustrações, fotografias, apresentações, vídeos, conteúdos escritos e de som e áudio, programas de computador,
                                banco de dados, arquivos de transmissão e quaisquer outras informações e direitos de propriedade intelectual da razão social {this.state.name},
                                observados os termos da <a href="https://www.jusbrasil.com.br/legislacao/91774/código-de-propriedade-industrial-lei-9279-96">Lei da Propriedade Industrial</a>
                                (Lei nº <a href="https://www.jusbrasil.com.br/legislacao/91774/código-de-propriedade-industrial-lei-9279-96">9.279</a>/96),
                                <a href="https://www.jusbrasil.com.br/legislacao/92175/lei-de-direitos-autorais-lei-9610-98"> Lei de Direitos Autorais</a>
                                (Lei nº <a href="https://www.jusbrasil.com.br/legislacao/92175/lei-de-direitos-autorais-lei-9610-98">9.610</a>/98) e
                                <a href="https://www.jusbrasil.com.br/legislacao/109879/lei-do-software-lei-9609-98"> Lei do Software</a>
                                (Lei nº <a href="https://www.jusbrasil.com.br/legislacao/109879/lei-do-software-lei-9609-98">9.609</a>/98), estão devidamente reservados.
                            </p>
                            <br />
                            <p>
                                Este Termos de Uso não cede ou transfere ao usuário qualquer direito,
                                de modo que o acesso não gera qualquer direito de propriedade intelectual
                                ao usuário, exceto pela licença limitada ora concedida.
                            </p>
                            <br />
                            <p>
                                O uso da plataforma pelo usuário é pessoal, individual e intransferível,
                                sendo vedado qualquer uso não autorizado, comercial ou não-comercial.
                                Tais usos consistirão em violação dos direitos de propriedade intelectual
                                da razão social {this.state.name}, puníveis nos termos da legislação aplicável.
                            </p>

                            <br />
                            <h3>8. Da rescisão</h3>
                            <p>
                                A não observância das obrigações pactuadas neste Termo de Uso ou da legislação aplicável
                                poderá, sem prévio aviso, ensejar a imediata rescisão unilateral por parte da razão social {this.state.name} e o 
                                bloqueio de todos os serviços prestados ao usuário.
                            </p>


                            <br />
                            <h3>9. Das alterações</h3>
                            <p>Os itens descritos no presente instrumento poderão sofrer alterações, unilateralmente e a qualquer tempo, 
                                por parte de {this.state.name}, para adequar ou modificar os serviços, 
                                bem como para atender novas exigências legais. 
                                As alterações serão veiculadas pelo site {this.state.name} e o usuário poderá optar por 
                                aceitar o novo conteúdo ou por cancelar o uso dos serviços, caso seja assinante de algum serviço.
                            </p>

                            <h3>10. Da política de privacidade</h3>
                            <p>
                                Além do presente Termo, o usuário deverá consentir com as disposições contidas na respectiva <a href="/politica-de-privacidade" target="_blank">Política de Privacidade</a> a ser apresentada a todos os interessados dentro da interface da plataforma.
                            </p>

                            <h3>11. Do foro</h3>
                            <p>Para a solução de controvérsias decorrentes do presente instrumento será aplicado integralmente o Direito brasileiro.</p>
                            <br />
                            <br />
                            <p>Este Termo de Uso é válido a partir do dia 10 de janeiro de 2021.</p>
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
