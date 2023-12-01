import ProductShopping from "@/components/ProductShopping"
import { CartContext } from "@/context/cart/CartContext"
import { useContext } from "react"

export default function CartScreen  () {
  const {addProduct,state, removeProduct} =useContext(CartContext)
  const totalOrder = state.cart.reduce((acc, product) => acc + product.price, 0)
  return (
    <section>
      <h1>Cart</h1>
      <ul>
        {state.cart.map((product) => (
          <ProductShopping product={product} key={product.id} add={addProduct} remove={removeProduct}/>
        ))}
      </ul>
      <h2>Total Order: {totalOrder}</h2>
      <button>Checkout</button>
    </section>
  )
}
  
