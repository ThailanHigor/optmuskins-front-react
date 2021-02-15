import './index.css';

function Banner(){
    return (
        <>
        <div className="banner__container" style={{backgroundImage: 'url("/assets/images/banner.png")'}}>
            <div className="banner__info">
                <h3>Pesquisando skins de CSGO?</h3>
                <h2 className="banner__h2">Encontramos o melhor preço da sua skin favorita antes do aquecimento acabar</h2>
            </div>
        </div>
        </>
    );
}

export default Banner;