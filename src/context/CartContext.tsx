import { createContext, ReactNode, useState } from 'react';

export type CartItemData = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

interface CartContext {
  cartIsOpen: boolean;
  setCartIsOpen: (value: boolean) => void;
  cartItems: CartItemData[];
  addToCart: (itemToAdd: CartItemData) => void;
  deleteFromCart: (id: CartItemData['id']) => void;
  totalCartItems: () => number;
}
/*
interface CartProviderProps {
    children: ReactNode;
}*/

const initialContext: CartContext = {
  cartIsOpen: false,
  setCartIsOpen: () => undefined,
  cartItems: [],
  addToCart: () => undefined,
  deleteFromCart: () => undefined,
  totalCartItems: () => 0,
};

const CartContext = createContext(initialContext);

function CartProvider({ children }: { children: ReactNode }) {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemData[]>([]);

  function totalCartItems() {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  }

  function addToCart(itemToAdd: CartItemData) {
    setCartItems((currCartItems) => {
      if (currCartItems.find((item) => item.id === itemToAdd.id) == null) {
        return [...currCartItems, itemToAdd];
      } else {
        return currCartItems.map((item) => {
          if (item.id === itemToAdd.id) {
            return { ...item, quantity: item.quantity + itemToAdd.quantity };
          } else {
            return item;
          }
        });
      }
    });
  }

  function deleteFromCart(id: CartItemData['id']) {
    setCartItems((currCartItems) =>
      currCartItems.filter((cartItem) => cartItem.id !== id)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartIsOpen,
        setCartIsOpen,
        cartItems,
        addToCart,
        deleteFromCart,
        totalCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
