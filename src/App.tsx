import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/common/Home"
import Header from "./components/common/Header"
import MainTypeScript from "./components/typescript/MainTypeScript"
import MainHooks from "./components/hooks/MainHooks"
import Default from "./components/common/Default"


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="typescript" element={<MainTypeScript/>}/>
        <Route path="hooks" element={<MainHooks/>}/>
        <Route path="default" element={<Default/>}/>
        <Route path="/*" element={<Navigate to={ 'default' } />}/>
      </Routes>
    </>
  )
}

export default App
