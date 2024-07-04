import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    function addToCart(item) {
        let tempCart = [...cart]
        tempCart.push(item)
        setCart(tempCart)
        console.log(cart)
    }
    function removeFromCart(item) {
        const tempCart = cart.filter(product => product !== item)
        setCart(tempCart)
    }

    const [totalPrice, setTotalPrice] = useState(0)
    function getTotalPrice(cart) {
        let total = 0
        for (let i = 0; i < cart.length; i++) {
            total = cart[i].price
        }
        return total
    }
    useEffect(() => setTotalPrice(getTotalPrice(cart)), [cart])

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider

export const CartState = () => {
    return useContext(CartContext)
}