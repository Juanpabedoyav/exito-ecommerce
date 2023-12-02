import styles from "@/styles/Products.module.scss"
import ProductCard from "@/components/ProductCard"
import {  ProductCart } from "@/interfaces/products"

interface HomeScreenProps {
    products: ProductCart[]
}
export default function HomeScreen  ({ products }: HomeScreenProps) {
  return (
    <section className={styles.list}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  )
}
  
