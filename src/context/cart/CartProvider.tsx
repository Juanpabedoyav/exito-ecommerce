import useInitialState from "@/hooks/useInitialState"
import { CartContext } from "./CartContext"


interface CartProviderProps{
    children: JSX.Element | JSX.Element[] 
}


export const CartProvider = ({children} : CartProviderProps) =>{
  const initialState = useInitialState()
  return(
    <CartContext.Provider value={initialState}>
      {children}
    </CartContext.Provider>
  )
}