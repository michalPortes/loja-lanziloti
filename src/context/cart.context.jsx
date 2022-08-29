import { useEffect } from "react";
import { createContext, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {
  //find if cartitem container productToAdd is already
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

  // If found, increment qunatity
  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }

  // return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)


  if (existingCartItem.quantity === 1) {

    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)

  }

  return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  )
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItem: [],
  addItemToCart: () => { },
  removeItemToCart: () => { },
  cartCount: 0
})



export const CartProvider = ({ children }) => {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const netCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(netCartCount)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItems, productToAdd))
  }
  const removeItemToCart = (cartItemToRemove) => {
    setCartItem(removeCartItem(cartItems, cartItemToRemove))
  }
  const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemToCart, cartItems, cartCount }



  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider >
  )
}