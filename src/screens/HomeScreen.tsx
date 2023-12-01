import ProductCard from "@/components/ProductCard"
import { Product } from "@/interfaces/products"

interface HomeScreenProps {
    products: Product[]
}
export default function HomeScreen  ({ products }: HomeScreenProps) {
  console.log(products)
  return (
    <div>
      <ul>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </div>
  )
}
  

export async function getStaticProps() {
  // Call an external API endpoint to get produts.
  const res = await fetch("https://fakestoreapi.com/products")
  const products : Product[] = await res.json()
  console.log(products)
  return {
    props: {
      products,
    },
  }
}
  