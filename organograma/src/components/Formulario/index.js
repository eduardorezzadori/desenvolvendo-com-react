import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const Submit = (event) => {
        
        event.preventDefault()

        props.submit({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="card-creater">
            <form className="container-card-creater" onSubmit={Submit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    label="Nome"
                    msg="Informe seu nome..."
                    valor={nome}
                    aoAlterado={evento => setNome(evento)}
                />
                <CampoTexto
                    label="Cargo"
                    msg="Informe seu nome..."
                    valor={cargo}
                    aoAlterado={evento => setCargo(evento)}
                />
                <CampoTexto
                    label="Imagem"
                    msg="Informe o endereço da imagem..."
                    valor={imagem}
                    aoAlterado={evento => setImagem(evento)}
                />
                <ListaSuspensa
                    label="Time"
                    times={props.times}
                    valor={time}
                    aoAlterado = {evento => setTime(evento)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario