import { createContext } from "react"
import { ProductCart } from "@/interfaces/products"


export interface CartContextProps {
    state:{
        cart: ProductCart[],
        isOpen: boolean
    }
    addProduct: (payload: ProductCart) => void,
    removeProduct: (payload: ProductCart) => void,
    removeProductByOne: (payload: ProductCart) => void,
    toogleOrder: () => void,
}


export const CartContext = createContext({} as CartContextProps)