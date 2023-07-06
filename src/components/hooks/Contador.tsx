import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(2);
    const updateCount = (newValue: number = 1) => {
        setContador((value) => value + newValue)
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2 className="text-center">Contador: <small>{contador}</small></h2>
                </div>
                <div className="card-body text-center">
                    <button className="btn btn-primary m-1" onClick={() => updateCount(2)}>Incrementar</button>
                    <button className="btn btn-secondary" onClick={() => updateCount(-2)}>Decrementar</button>
                </div>
            </div>
        </div>
    )
}

export default Contador