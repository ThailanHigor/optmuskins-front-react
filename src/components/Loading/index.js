import "./index.css";

export default function Loading(){
    return(
        <div className="loading__container">
            <img src="/assets/icons/loading.svg" alt="loading"/>
            <p>Carregando...</p>
        </div>
    )
}