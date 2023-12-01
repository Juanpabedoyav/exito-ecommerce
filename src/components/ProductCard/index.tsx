import { Product } from "@/interfaces/products"
import styles from "../../styles/Home.module.scss"
import Image from "next/image"
import { useRouter } from "next/router"
interface ProductCardProps {
    product: Product
}
export default function ProductCard ({ product} : ProductCardProps) {
  const router = useRouter()
  return (
    <div className={styles.card}>
      <section
        onClick={() => router.push(`/itemDetail/${product.id}`)}
        
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
          {product.rating.rate}
        </p>
      </section>
      <button title="Add to cart">Add to cart</button>
    </div>
  )
}
