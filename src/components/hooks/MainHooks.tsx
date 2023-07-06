import Contador from "./Contador"
import ContadorHook from '../hooks/ContadorHook'


const MainHooks = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-4"> Welcome to my hooks</h1>
            <hr />
            <Contador />
            <br />
            <ContadorHook />
        </div>
    )
}

export default MainHooks