import styles from "@/styles/ProductDetail.module.scss"
import { Product } from "@/interfaces/products"
import Link from "next/link"

interface CategoriesProps {
    categories: string[]
  }
export default function Categories  ({categories}: CategoriesProps) {
  let filter: string[] = categories && categories.map((item) =>  item)
  filter = filter.filter((value, index, array) => array.indexOf(value) === index)

   
  return (
    <div>
      <Link href={"/"}>Back to Home</Link>
      {filter.map((category) => {
        return (
          <Link href={"categories/"+ encodeURIComponent(category)} className={styles.card} key={category}>
            <h1>{category.toUpperCase()}</h1>
          </Link>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://fakestoreapi.com/products")
  const products : Product[] = await res.json()
  const categories  = products.map((product) => product.category)
  // By returning { props: { products } }, the Blog component
  // will receive `products` as a prop at build time
  return {
    props: {
      categories,
    },
  }
}