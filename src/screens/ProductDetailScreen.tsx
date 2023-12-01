import { Product } from "@/interfaces/products"
import ProductDetail from "@/components/ProductDetail"

interface ProductDetailScreenProps {
    product: Product
}
export default function ProductDetailScreen  ({ product }: ProductDetailScreenProps) {
  return (
    <section>
      <ProductDetail product={product}/>
    </section>
  )
}
  
