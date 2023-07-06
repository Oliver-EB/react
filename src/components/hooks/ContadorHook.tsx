import { useState } from "react";

const ContadorHook = () => {

    var [count, setCount] = useState(0);
    const increment =()=>{ setCount(count++)}
    const decrement =()=>{ setCount(count--)}


    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2 className="text-center">Contador con Hooks: <small>{count}</small></h2>
                </div>
                <div className="card-body text-center">
                    <button className="btn btn-outline-success m-1" onClick={() => increment()}>Incrementar</button>
                    <button className="btn btn-outline-warning" onClick={() => decrement()}>Decrementar</button>
                </div>
            </div>
        </div>
    )
}

export default ContadorHook

