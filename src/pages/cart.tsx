import styles from "@/styles/Cart.module.scss"
import ProductShopping from "@/components/ProductShopping"
import { CartContext } from "@/context/cart/CartContext"
import Link from "next/link"
import {  useContext, useEffect } from "react"
import { useRouter } from "next/navigation"
import { CreditCardIcon } from "@/components/Icons"

export default function Cart () {
  const router = useRouter()
    
  const {addProduct,state, removeProduct, removeProductByOne, toogleOrder} =useContext(CartContext)
  useEffect(() => {
    toogleOrder()
  }, [])
  const totalOrder = state.cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

  return (
    <>
      <Link className={styles["link-redirect"]} href={"/"}>Back to Home</Link>
      <section>
        {
          state.cart.map((product) => (
            <ProductShopping product={product} key={product.id} add={addProduct} remove={removeProduct} removeOneByOne={removeProductByOne}/>
          )
          )
        }
        <div className={styles.checkout}>
          <h2>Total Order: $ {totalOrder}</h2>
          <button className={styles["cart-button"]} onClick={() => router.push("/checkout")}><strong>Checkout</strong> {CreditCardIcon()}</button>
        </div>
      </section>
    </>

  )
}
