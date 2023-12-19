import CampoTexto from "../CampoTexto"
import "./CriarCard.css"

const criarCard = () => {
    return (
        <div className="container-card-creater">
            <CampoTexto label="Nome" msg="Informe seu nome..." />
            <CampoTexto label="Cargo" msg="Informe seu nome..." />
            <CampoTexto label="Imagem" msg="Informe o endereço da imagem..." />
            <CampoTexto label="Time" msg="Informe seu time..." />
        </div>
    )
}

export default criarCard