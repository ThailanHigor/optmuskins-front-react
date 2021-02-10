import "./index.css";

export default function Loading(){
    return(
        <div className="loading__container">
            <img src="/assets/icons/loading.svg" />
            <p>Pera ae! Tô buscando os preços...</p>
        </div>
    )
}