import ProductShopping from "@/components/ProductShopping"
import {  ProductCart } from "@/interfaces/products"

export default function CartScreen  () {
  const products: ProductCart[] = []
  
  return (
    <section>
      <ul>
        {products.map((product) => (
          <ProductShopping product={product} key={product.id} />
        ))}
      </ul>
    </section>
  )
}
  
