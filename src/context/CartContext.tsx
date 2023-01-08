import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function totalCartItems() {
        return (cartItems.reduce((total, cartItem) => (total + cartItem.quantity), 0));
    }

    function addToCart(itemToAdd) {
        setCartItems((currCartItems) => {
            if (currCartItems.find(item => item.id === itemToAdd.id) == null) {
                return [...currCartItems, itemToAdd]
            } else {
                return currCartItems.map(item => {
                    if (item.id === itemToAdd.id) {
                        return { ...item, quantity: item.quantity + itemToAdd.quantity }
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    function deleteFromCart(id) {
        setCartItems(currCartItems => (
            currCartItems.filter((cartItem) => cartItem.id !== id)
        ))
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart, totalCartItems }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };