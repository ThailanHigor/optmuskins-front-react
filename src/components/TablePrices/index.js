import './index.css';
import skin from '../../assets/images/Skins/AK-47/asiimov.png'
import bleik from '../../assets/images/bleikstore.png'
import csgostore from '../../assets/images/csgostore.png'
import nesha from '../../assets/images/neshastore.png'
import steam from '../../assets/images/steam.svg'

/* eslint-disable jsx-a11y/anchor-is-valid */

export default function TablePrices() {
    return (
        <div className="table_prices_result__container">
            <div className="content_info">
                <img src={skin} alt="asiimov" />
                <h3 className="name">Asiimov</h3>

            </div>
            <div className="table_comparation">
                <table>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col" className="coluna-logo">
                                <img src={bleik} className="image-logo" alt="bleik" />
                            </th>
                            <th scope="col" className="coluna-logo">
                                <img src={csgostore} className="image-logo" alt="csgostore"/>
                            </th>
                            <th scope="col" className="coluna-logo">
                                <img src={nesha} className="image-logo" alt="nesha"/>
                            </th>
                            <th scope="col" className="coluna-logo">
                                <img src={steam} className="image-logo" alt="steam"/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Nova de Fábrica (FN)</th>
                            <td><a href="#" target="__blank">-</a></td>
                            <td><a href="#" target="__blank">-</a></td>
                            <td><a href="http://www.neshastore.com/-AK-47-Asiimov-FN-CS-GO?search=ak 47 asiimov&amp;description=true&amp;sort=p.price&amp;order=DESC&amp;limit=100" target="__blank">768,00</a></td>
                            <td><a href="https://steamcommunity.com/market/listings/730/AK-47%20%7C%20Asiimov%20%28Factory%20New%29" target="__blank">933.52</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}