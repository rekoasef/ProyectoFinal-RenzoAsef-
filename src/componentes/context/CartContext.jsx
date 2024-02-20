import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)){
            const pos = cart.findIndex(prod => prod.id === id)
            cart[pos].cantidad += cantidad
            setCart([...cart])/*Lo que hacemos aca es si existe el producto en el carrito aumentar la cantidad
            y si no existe agregarlo por primera vez */
        }else{
            cart.push({...producto, cantidad:cantidad})
            setCart([...cart])
        }

    }

    const removeItem = (id) => {
        const item = cart.filter(prod => prod.id != id)
        setCart([...item])

    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const CantidadTotalProductos = () =>{
        return cart.reduce((acum, prod) => acum += prod.cantidad, 0)
    }

    const TotalPrecioProductos = () =>{
        return cart.reduce((acum, prod) => acum += prod.cantidad * prod.precio, 0)
    }

    return(
        <CartContext.Provider value={{cart, addItem,removeItem,clearCart,isInCart,CantidadTotalProductos,TotalPrecioProductos}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;