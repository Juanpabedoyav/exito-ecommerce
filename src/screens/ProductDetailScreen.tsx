import styles from "@/styles/ProductDetail.module.scss"
import {  ProductCart } from "@/interfaces/products"
import ProductDetail from "@/components/ProductDetail"

interface ProductDetailScreenProps {
    product: ProductCart
}
export default function ProductDetailScreen  ({ product }: ProductDetailScreenProps) {
  return (
    <section className={styles["product-detail"]}>
      <ProductDetail product={product}/>
    </section>
  )
}
  
