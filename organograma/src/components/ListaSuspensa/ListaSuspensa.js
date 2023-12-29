import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.times.map( item => <option>{item}</option> )}
            </select>
        </div>
    )
}

export default ListaSuspensa