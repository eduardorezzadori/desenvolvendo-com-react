import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={true}>
                {props.times.map( item => <option key={item.name}>{item.name}</option> )}
            </select>
        </div>
    )
}

export default ListaSuspensa