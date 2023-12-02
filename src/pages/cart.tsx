import ProductShopping from "@/components/ProductShopping"
import { CartContext } from "@/context/cart/CartContext"
import Link from "next/link"
import {  useContext, useEffect } from "react"

export default function Cart () {
  const {addProduct,state, removeProduct, removeProductByOne, toogleOrder} =useContext(CartContext)
  useEffect(() => {
    toogleOrder()
  }, [])

  return (
    <section>
      <Link href={"/"}>Back to Home</Link>
      {
        state.cart.map((product) => (
          <ProductShopping product={product} key={product.id} add={addProduct} remove={removeProduct} removeOneByOne={removeProductByOne}/>
        )
        )
      }
    </section>
  )
}
