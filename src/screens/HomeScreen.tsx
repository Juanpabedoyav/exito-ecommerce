import ProductCard from "@/components/ProductCard"
import { Product } from "@/interfaces/products"

interface HomeScreenProps {
    products: Product[]
}
export default function HomeScreen  ({ products }: HomeScreenProps) {
  return (
    <section>
      <ul>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </section>
  )
}
  
