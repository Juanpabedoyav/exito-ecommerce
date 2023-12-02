import styles from "@/styles/Cart.module.scss"
import Image from "next/image"
import { ProductCart } from "@/interfaces/products"
import { DeleteIcon } from "../Icons"
interface ProductCartProps {
    product: ProductCart,
    add: (product: ProductCart) => void,
    remove: (product: ProductCart) => void
}
export default function ProductShopping ({ product , add, remove} : ProductCartProps) {
  return (
    
    <div
      className={styles["cart-item"]}
      key={product.id}
    >
      <Image src={product.image} alt={product.title} width={80} height={80}/>
      <p className={styles["cart-item--name"]}>{product.title} </p>
      <p> Price: {product.price}</p>
      <p> Quantity: {product.quantity}</p>
      <div className={styles["cart-actions"]} >
        <button className={styles["cart-add--button"]} onClick={()=>add(product)} title="Add to cart">+</button>
        <button className={styles["cart-remove--button"]}onClick={()=>remove(product)} title="Remove from cart">-</button>
        <button className={styles["cart-delete-all-button"]}>{DeleteIcon()}</button>
      </div>
    </div>

  )
}
