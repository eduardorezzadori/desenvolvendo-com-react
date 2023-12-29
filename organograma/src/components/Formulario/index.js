import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import "./Formulario.css"

const Formulario = () => {

    const times = ['PeD', 'MeP']

    return (
        <section>
            <form className="container-card-creater">
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" msg="Informe seu nome..." />
                <CampoTexto label="Cargo" msg="Informe seu nome..." />
                <CampoTexto label="Imagem" msg="Informe o endereço da imagem..." />
                <ListaSuspensa label = "Time" times = {times}/>
                <button>Criar card</button>
            </form>
        </section>
    )
}

export default Formulario