import Button1 from "../Button1"
import CampoTexto from "../CampoTexto"
import Tittle1 from "../Tittle1"
import "./CriarCard.css"

const criarCard = () => {
    return (
        <div className="container-card-creater">
            <Tittle1 />
            <CampoTexto label="Nome" msg="Informe seu nome..." />
            <CampoTexto label="Cargo" msg="Informe seu nome..." />
            <CampoTexto label="Imagem" msg="Informe o endereço da imagem..." />
            <CampoTexto label="Time" msg="Informe seu time..." />
            <Button1 />
        </div>
    )
}

export default criarCard