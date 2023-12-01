import {  ProductCart } from "@/interfaces/products"
import ProductDetail from "@/components/ProductDetail"

interface ProductDetailScreenProps {
    product: ProductCart
}
export default function ProductDetailScreen  ({ product }: ProductDetailScreenProps) {
  return (
    <section>
      <ProductDetail product={product}/>
    </section>
  )
}
  
