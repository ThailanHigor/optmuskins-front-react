import './index.css';

function Banner(){
    return (
        <>
        <div className="banner__container_mobile" style={{backgroundImage: 'url("/assets/images/banner-top-mobile.png")'}}></div>
        <div className="banner__container" style={{backgroundImage: 'url("/assets/images/banner.png")'}}></div>
        </>
    );
}

export default Banner;