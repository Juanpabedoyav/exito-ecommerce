import { CartContext } from "@/context/cart/CartContext"
import {  ProductCart } from "@/interfaces/products"
import Image from "next/image"
import { useContext } from "react"
import Button from "../ui/ButtonAdd"

interface ProductDetailProps {
    product: ProductCart
}
const ProductDetail = ({ product}: ProductDetailProps) => {
  const {addProduct} =useContext(CartContext)
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
        <Button onClick={() => addProduct(product)} title="add to cart"/>
     
      </div>
    </section>
  )
}

export default ProductDetail