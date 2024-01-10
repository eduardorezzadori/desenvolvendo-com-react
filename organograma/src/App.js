import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Equipe from './components/Equipes';
import { times } from "./general/Times.js";

function App() {

  const [colaboradores, setColaborador] = useState([])

  const onSubmit = (colaborador) => {
    setColaborador([...colaboradores, colaborador])
    console.log(colaboradores);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario submit={onSubmit} times={times} />
      <Equipe />
    </div>
  );
}

export default App;
