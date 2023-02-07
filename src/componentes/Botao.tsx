import { useState } from "react";

const Botao = ()=>{
    const [btn,Setbtn] = useState(0);
    

    const contador = ()=>{
        Setbtn(btn+1);
    }


    return (
        <div>
            <button onClick={contador}>Clique</button>
            <div>
                {btn}
            </div>
        </div>
    )
}

export default Botao;