import ItemListContainer from "./componentes/ItemListContainer"
import Header from "./componentes/header"
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
