import styles from "@/styles/Home.module.scss"
import Head from "next/head"
import { Product, ProductCart } from "@/interfaces/products"
import HomeScreen from "@/screens/HomeScreen"
import {  useRef, useState } from "react"



interface HomeProps {
  products: ProductCart[]
}
export default function Home({products}: HomeProps) {
  const [input, setInput] = useState("")
  //input search debounce
  const debounceRef = useRef<NodeJS.Timeout>()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      setInput(e.target.value)
    }, 300)
  }
 
  if (input.length > 0) {
    products = products.filter((product) => {
      return product.title.toLowerCase().match(input.toLowerCase())
    })
  }
 
  return (
    <>
      <Head>
        <title>Next JS Pages Challenge</title>
        <meta name="description" content="Challenge Grupo Éxito" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <input className={styles.search} type="text" onChange={handleSearch} placeholder="Search your product ..."/>
        < HomeScreen products={products} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://fakestoreapi.com/products")
  let products : Product[] = await res.json()
  products  = products.map((product) => {
    return {
      ...product,
      quantity: 1,
    }
  })
  // By returning { props: { products } }, the Blog component
  // will receive `products` as a prop at build time
  return {
    props: {
      products,
    },
  }
}
