import "./index.css";
import { H4 } from '../../globalStyled';
import faca from '../../assets/images/armasRadial/bayonet.png';

export default function KnivesMenu(){
    return(
        <div className="knives_menu__container">
            <div className="content_list">
                <div className="card">
                    <div className="card_inner">
                        <span className="category">Facas</span>
                        <img src={faca} alt="bayonet" />
                        <H4>Bayonet</H4>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner">
                        <span className="category">Facas</span>
                        <img src={faca} alt="bayonet" />
                        <H4>Bayonet</H4>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner">
                        <span className="category">Facas</span>
                        <img src={faca} alt="bayonet" />
                        <H4>Bayonet</H4>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner">
                        <span className="category">Facas</span>
                        <img src={faca} alt="bayonet" />
                        <H4>Bayonet</H4>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner">
                        <span className="category">Facas</span>
                        <img src={faca} alt="bayonet" />
                        <H4>Bayonet</H4>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner">
                        <span className="category">Facas</span>
                        <img src={faca} alt="bayonet" />
                        <H4>Bayonet</H4>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner">
                        <span className="category">Facas</span>
                        <img src={faca} alt="bayonet" />
                        <H4>Bayonet</H4>
                    </div>
                </div>
            </div>
        </div>
    )
}