import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)}>
                {props.times.map( item => <option>{item}</option> )}
            </select>
        </div>
    )
}

export default ListaSuspensa