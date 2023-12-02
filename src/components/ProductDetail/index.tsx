import style from "@/styles/ProductDetail.module.scss"
import {  ProductCart } from "@/interfaces/products"
import { useContext } from "react"
import { CartContext } from "@/context/cart/CartContext"
import Image from "next/image"
import Button from "../ui/Button"

interface ProductDetailProps {
    product: ProductCart
}
const ProductDetail = ({ product}: ProductDetailProps) => {
  const {addProduct} =useContext(CartContext)
  return (
    <section className={style["product-fields"]}>
      <div className={style["product-image"]}>
        <h1 className={style["product-name"]}>{product.title}</h1>
        <p className={style["product-category"]}>Category: {product.category}</p>
        <Image  priority quality={100} sizes="auto" src={product.image} alt={product.title} width={200} height={200}/>
      </div>
      <div className={style["product-info"]}>
        <p className={style["product-description"]}><strong>Description:</strong> {product.description}</p>
        <p className={style["product-price"]}>Price: ${product.price}</p>
        <p>Rating:{product.rating.rate}</p>
        <Button onClick={() => addProduct(product)} title="add to cart"/>
      </div>
    </section>
  )
}

export default ProductDetail