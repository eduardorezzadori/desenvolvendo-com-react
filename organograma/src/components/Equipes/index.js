import "./Equipe.css"

const Equipe = (props) => {
    return (
        <section className="squad-container" style={{backgroundColor: props.background}}>
            <header>
                <h2 style={{borderColor: props.textColor}}>{props.label}</h2>
            </header>
        </section >
    )
}

export default Equipe