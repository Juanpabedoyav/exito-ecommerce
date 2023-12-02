import styles from "@/styles/Cart.module.scss"
import ProductShopping from "@/components/ProductShopping"
import { CartContext } from "@/context/cart/CartContext"
import { useContext } from "react"
import { CartEmptyIcon,  CloseIcon } from "@/components/Icons"

export default function CartScreen  () {
  const {addProduct,state, removeProduct, toogleOrder} =useContext(CartContext)
  const totalOrder = state.cart.reduce((acc, product) => acc + product.price, 0)
  return (
    <div className={styles["cart-container"]}>
      <section className={styles.cart}>
        <p className={styles["cart-close"]} onClick={() => toogleOrder()}>{CloseIcon()}</p>
        <h1>Cart</h1>
        <ul className={styles["cart-list"]}>
          {
            state.cart.length === 0 && <div>{CartEmptyIcon()}</div>
          }          
          {state.cart.map((product) => (
            <ProductShopping product={product} key={product.id} add={addProduct} remove={removeProduct}/>
          ))}
        </ul>
        <h2>Total Order: $ {totalOrder}</h2>
        <button onClick={() => toogleOrder()}>Checkout</button>
      </section>
    </div>
  )
}
  
