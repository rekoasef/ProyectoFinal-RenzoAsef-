import Carousel from "./componentes/Carousel";
import Error404 from "./componentes/Error404";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
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
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        <Route path={"/*"} element={<Error404/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
