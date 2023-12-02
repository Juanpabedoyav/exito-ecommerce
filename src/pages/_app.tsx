import "@/styles/globals.css"
import { CartProvider } from "@/context/cart/CartProvider"
import type { AppProps } from "next/app"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  )
}
