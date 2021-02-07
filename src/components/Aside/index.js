import './index.css';
import logo from '../../assets/images/logo.png'

function Aside() {
  return (
    <div className="aside__container">
        <div className="logo_container">
            <a className="image_logo_link">
                <img src={logo} />
            </a>
        </div>
        <div className="menu_container">
            <nav>
                <ul>
                    <li className="active">
                        <a><span>Home</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  );
}

export default Aside;
