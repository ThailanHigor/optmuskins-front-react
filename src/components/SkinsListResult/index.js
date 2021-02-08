import './index.css';
import skin from '../../assets/images/Skins/AK-47/asiimov.png'

export default function SkinsListResult() {
    return (
        <div className="skins_list_result__container">
            <div className="content_list">
                <div className="card">
                    <div className="card_inner">
                        <img src={skin} alt="bayonet" />
                        <div className="content_info">
                            <span className="category">Rifles</span>
                            <span className="name">Asiimov</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}