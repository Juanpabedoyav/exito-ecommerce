import styles from "@/styles/Categories.module.scss"
import { Product, ProductCart } from "@/interfaces/products"
import HomeScreen from "@/screens/HomeScreen"
import { GetStaticPropsContext } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import useSeo from "@/hooks/useSeo"

interface CategoryProps {
    productsWithQuantity: ProductCart[]
  
}
const Category = ({productsWithQuantity}: CategoryProps) => {
  const router = useRouter()
  const { category } = router.query
  // SEO
  if(!category) return null
  useSeo({
    title: `Category ${category}`,
    description: "Category page",
  })
  const productsByCategory = productsWithQuantity && productsWithQuantity.filter((product) => product.category === category)
  return (
    <>
      <Link className={styles["link-redirect"]} href={"/categories"}>Back to Catergories</Link>
      <HomeScreen products={productsByCategory}/>
    </>
  )
}

export default Category


export const getStaticPaths = async () => {
  // Fetch the categories dynamically from your API or data source
  const res = await fetch("https://fakestoreapi.com/products")
  const products: Product[] = await res.json()

  // Extract unique categories from the products
  const categories = Array.from(new Set(products.map((product) => product.category)))

  // Generate the paths for each category
  const paths = categories?.map((category) => ({
    params: { category },
  }))

  return {
    paths,
    fallback: false, // Set to true if you want to enable incremental static regeneration
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if(!params?.category) return {props: {}}
  // Fetch products based on the category
  const res = await fetch(`https://fakestoreapi.com/products?category=${params.category}`)
  const products: ProductCart[] = await res.json()

  const productsWithQuantity = products.map((product) => ({
    ...product,
    quantity: 1,
  }))

  return {
    props: {
      productsWithQuantity,
    },
  }
}