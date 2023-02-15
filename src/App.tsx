import { useState } from "react";
import "./App.css";
import "./components/Griditem/index.css"
// import poweredImage from "./assets/powered.png";
import leftArrowImage from "./assets/leftarrow.png";
import {levels,calculateImc, Level} from './help/imc';
import {Griditem} from './components/Griditem/index';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);
  const handleCalculateButton = ()=>{
    if(heightField && weightField){
      setToShow(calculateImc(heightField, weightField));
    }else{
      alert("Preencha todos os campos...")
    }
  }
  const handleBackButton = ()=>{
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }
  return (
    <div className="main">
      <header>
        <div className="headerContainer">
          {/* <img src={poweredImage} alt="" width={150} /> */}
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
            disabled={toShow ? true : false}
            value={heightField > 0 ? heightField : " "}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Digite o seu peso."
            value={weightField > 0 ? weightField : " "}
            disabled={toShow ? true : false}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />
          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className="rightSide">
        {!toShow &&
            <div className="grid">
              {levels.map((item, key) => (
                <Griditem key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className="rightBig">
              <div className="rightArrow" onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <Griditem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default App;
