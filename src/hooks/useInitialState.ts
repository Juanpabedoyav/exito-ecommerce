import { ProductCart } from "@/interfaces/products"
import { useState } from "react"


export interface CartState  {
  cart: ProductCart[],
  isOpen: boolean,
}
const INITIAL_STATE: CartState = {
  cart: [],
  isOpen: false,
}
const useInitialState =() =>{

  const [state, setState] = useState(INITIAL_STATE)
  
  const addProduct = (payload: ProductCart) =>{
    const productExist = state.cart.find((item) => item.id === payload.id)
    const newCart = productExist  ? 
      state.cart.map((item) => item.id === payload.id ? 
        { ...item, quantity: item.quantity + payload.quantity, totalprice: (item.quantity + payload.quantity) * item.unit_price}
        : 
        item) 
      : 
      [...state.cart, { ...payload, totalprice: payload.unit_price * payload.quantity }]
    console.log(newCart)
    return setState({
      ...state,
      cart: newCart,
    })
  }
  const removeProduct = (payload: ProductCart) =>{
    const newCart = state.cart.filter((item) => item.id !== payload.id)
    return setState({
      ...state,
      cart: newCart,
    })
  }

  const toogleOrder = () =>{
    setState({
      ...state,
      isOpen: !state.isOpen,
    })

  }


  return{
    state,
    addProduct,
    removeProduct,
    toogleOrder,
  }

}


export default useInitialState