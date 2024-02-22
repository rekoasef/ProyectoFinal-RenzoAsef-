import Cart from "./componentes/Cart";
import Checkout from "./componentes/Checkout";
import Error404 from "./componentes/Error404";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer"
import CartContextProvider from "./componentes/context/CartContext";
import Header from "./componentes/header"
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"/*"} element={<Error404/>}/>
          <Route path={"/cart"} element={<Cart/>}/>
          <Route path={"/Checkout"} element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>

    </>
  )
}

export default App
