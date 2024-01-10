import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';

function App() {

  const [colaboradores, setColaborador] = useState([])

  const onSubmit = (colaborador) => {
    setColaborador([...colaboradores, colaborador])
    console.log(colaboradores);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario submit={onSubmit}/>
    </div>
  );
}

export default App;
