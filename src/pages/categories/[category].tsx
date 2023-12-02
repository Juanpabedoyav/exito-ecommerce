import { Product, ProductCart } from "@/interfaces/products"
import HomeScreen from "@/screens/HomeScreen"
import { GetStaticPropsContext } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

interface CategoryProps {
    products: ProductCart[]
  
}
const Category = ({products}: CategoryProps) => {
  const router = useRouter()
  const { category } = router.query
  //   console.log(category)
  const productsByCategory = products.filter((product) => product.category === category)
  return (
    <>
      <Link href={"/categories"}>Back to Catergories</Link>
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
  const paths = categories.map((category) => ({
    params: { category },
  }))

  return {
    paths,
    fallback: false, // Set to true if you want to enable incremental static regeneration
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {

  // Fetch products based on the category
  if(!params?.category) return {props: {}}
  const res = await fetch(`https://fakestoreapi.com/products?category=${params.category}`)
  const products: Product[] = await res.json()
  const productsCategories = {
    ...products,
    quantity: 1,
  }

  return {
    props: {
      productsCategories,
    },
  }
}