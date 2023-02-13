import { useState } from "react";
import "./App.css";
import "./components/Griditem/index.css"
import poweredImage from "./assets/powered.png";
import {levels,calculateImc} from './help/imc';
import {Griditem} from './components/Griditem/index';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const handleCalculateButton = ()=>{
    if(heightField && weightField){

    }else{
      alert("Preencha todos os campos...")
    }
  }
  return (
    <div className="main">
      <header>
        <div className="headerContainer">
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className="container">
        <div className="leftSide">
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <input
            type="number"
            name=""
            id=""
            placeholder="Digite a sua altura."
            value={heightField > 0 ? heightField : " "}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Digite o seu peso."
            value={weightField > 0 ? weightField : " "}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className="rightSide">
          <div className="grid">
            {levels.map((item,key)=>(
              <Griditem key={key} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
