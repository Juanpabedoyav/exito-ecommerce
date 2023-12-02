import style from "@/styles/ProductDetail.module.scss"
import {  ProductCart } from "@/interfaces/products"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext } from "react"
import { CartContext } from "@/context/cart/CartContext"
import Button from "../ui/Button"
import {  renderStars } from "../Icons"
interface ProductCardProps {
    product: ProductCart
}
export default function ProductCard ({ product} : ProductCardProps) {
  const router = useRouter()
  const {addProduct} =useContext(CartContext)
  

  return (
    <div 
      className={style.card}
    >
      <section
        onClick={() => router.push(`/itemDetail/${product.id}`)}
        key={product.id}
      >
        <figure className={style["product-image--card"]}>
          <Image priority quality={100} src={product.image} alt={product.title} width={250} height={100}/>

        </figure>
        <div className={style["product-info--card"]}>
          <p className={style["product-category--card"]}>{product.category.toUpperCase()}</p>
          <p className={style["product-name--card"]} >{product.title.slice(0,50)}...</p>
          <p className={style["product-price--card"]}>Price: ${product.price}</p>
          <p>Rating: {renderStars(product.rating.rate)}</p>
        </div>
      </section>
      <Button onClick={()=> addProduct(product)} title="Add to cart"/>
    </div>
  )
}
