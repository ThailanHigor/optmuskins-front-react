import './index.css';

export default function Footer(){
    return(
        <footer>
            <div className="footer_container">
                <div className="content_left"><p>Desenvolvido por <span>Skin Matcher Team</span></p></div>
                <div className="content_right"><p>{new Date().getFullYear()} - Todos os Diretos Reservados</p></div>
            </div>
        </footer>
    );
}