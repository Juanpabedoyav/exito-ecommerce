import { Product } from "@/interfaces/products"
import Image from "next/image"

interface ProductDetailProps {
    product: Product
}
const ProductDetail = ({ product}: ProductDetailProps) => {
  return (
    <section>
      <div>
        <h1>{product.title}</h1>
        <Image src={product.image} alt={product.title} width={200} height={200}/>
        <p>{product.category}</p>
      </div>
      <div>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.rating.rate}</p>
        <button title="add to cart">Add to Cart</button>
      </div>
    </section>
  )
}

export default ProductDetail