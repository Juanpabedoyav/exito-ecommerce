import { Product, ProductCart } from "@/interfaces/products"
import ProductDetailScreen from "@/screens/ProductDetailScreen"
import { GetStaticPropsContext } from "next"

interface ItemDetailProps {
  itemDetailswithQuantity: ProductCart
}
export default function ItemDetail  ({itemDetailswithQuantity}: ItemDetailProps){
  return (
    <ProductDetailScreen product={itemDetailswithQuantity}/>
  )
}


export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://fakestoreapi.com/products/")
  const products = await res.json()
   
  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = products.map((product : Product) => ({
    params: { id: product.id.toString() },
  }))
  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  if(!params?.id) return {props: {}}
  const res = await fetch("https://fakestoreapi.com/products/" + params.id)
  const itemDetails : Product = await res.json()
  const itemDetailswithQuantity =  {
    ...itemDetails,
    quantity: 1,
  }
  // // By returning { props: { products } }, the Blog component
  // // will receive `products` as a prop at build time
  return {
    props: {
      itemDetailswithQuantity,
    },
    revalidate: 1,
  }
}