import styles from "../../styles/Home.module.scss"
import Image from "next/image"
import { ProductCart } from "@/interfaces/products"
interface ProductCartProps {
    product: ProductCart,
    add: (product: ProductCart) => void,
    remove: (product: ProductCart) => void
}
export default function ProductShopping ({ product , add, remove} : ProductCartProps) {
  return (
    <div
      className={styles.card}
      key={product.id}
    >
      <Image src={product.image} alt={product.title} width={150} height={150}/>
      <h2>
        {product.title} 
        <span>-&gt;</span>
      </h2>
      <p>
        {product.category}
      </p>
      <p>
        {product.price}
      </p>
      <p>
        {product.quantity}
      </p>
      <p>
        {product.rating.rate}
      </p>
      <button onClick={()=>add(product)} title="Add to cart">Add to cart</button>
      <button onClick={()=>remove(product)} title="Remove from cart">Remove</button>
    
    </div>

  )
}
