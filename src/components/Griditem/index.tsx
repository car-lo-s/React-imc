import { Level } from "../../help/imc";
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item:Level
}

export const Griditem = ({item}:Props)=>{
    return (
        <div className="main" style={{backgroundColor:item.color}}>
            <div className="gridIcon">
                {item.icon === 'up' && <img src={upImage} width="30px" />}
                {item.icon === 'down' && <img src={downImage} width="30px" />}
            </div>
            <div className="gridTitle">{item.title}</div>
            <div className="gridInfo">
                <>IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong> </>
            </div>
        </div>
    )
}