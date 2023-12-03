import styles from "@/styles/Cart.module.scss"
import ProductShopping from "@/components/ProductShopping"
import { CartContext } from "@/context/cart/CartContext"
import { useContext } from "react"
import { CartEmptyIcon,  CloseIcon, CreditCardIcon } from "@/components/Icons"
import { useRouter } from "next/navigation"
import Link from "next/link"
import useSeo from "@/hooks/useSeo"

export default function CartScreen  () {
  const router = useRouter()
  const {addProduct,state, removeProduct, removeProductByOne,toogleOrder} =useContext(CartContext)

  const handleCheckout = () => {
    router.push("/checkout")
    toogleOrder()
  }
  // SEO
  useSeo({
    title: "Cart is " + `${state.cart.length === 0 ? "empty" : state.cart.length}`,
    description: "Cart page",
  })

  const totalOrder = state.cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  return (
    <div className={styles["cart-container"]}>
      <section className={styles.cart}>
        <div className={styles["cart-buttons"]}>
          <p className={styles["cart-close"]} onClick={() => toogleOrder()}>{CloseIcon()}</p>
          <Link className={styles["link-redirect--cart"]} href={"/cart"}>Go to Cart</Link>
        </div>
        <h1>Cart</h1>
        {
          state.cart.length === 0 && <div className={styles["cart-empty"]}>
            <div>
              {CartEmptyIcon()}
            </div>
            <h2>Cart Empty</h2>
          </div>
        }          
        {state.cart.map((product) => (
          <ProductShopping product={product} key={product.id} add={addProduct} remove={removeProduct} removeOneByOne={removeProductByOne}/>
        ))}
        <div className={styles.checkout}>
          <h2>Total Order: $ {totalOrder}</h2>
          <button className={styles["cart-button"]} onClick={() => handleCheckout()}><strong>Checkout</strong> {CreditCardIcon()}</button>
        </div>
      </section>
    </div>
  )
}
  
