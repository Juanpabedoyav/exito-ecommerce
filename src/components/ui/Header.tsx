import styles from "@/styles/Home.module.scss"
import Image from "next/image"
import Link from "next/link"
import { CartIcon, CategoryIcon } from "@/components/Icons"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "@/context/cart/CartContext"
import CartScreen from "@/screens/CartScreen"


export default function Header  ()  {
  const {state, toogleOrder} =  useContext(CartContext)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible(prev => !prev)
    }, 1500)
    setVisible(prev => !prev)
  }, [state.cart.length])


  return (
    <header className={styles.header}>
      {
        visible && 
        <div className={styles["info-alert"]}>
           Add <strong>{state.cart[state.cart.length-1]?.title} </strong> to cart
        </div>
      }
      <nav className={styles.nav}>
        <Link href={"/"}>
          <Image sizes="auto" priority quality={100} src={"https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/c10a9c1c-b69b-4955-9df8-5fa1854ad076___50dc4199e8020554de79a91123175966.svg"} alt="logo exito" width={80} height={80}/>
        </Link>
        <ul>
          <Link href={"/categories"}>{CategoryIcon()}</Link>
          <li onClick={()=> toogleOrder()} className={styles["cart-icon"]}>{CartIcon()}
            <strong className={styles["cart-info"]}>{state.cart.length}
            </strong>
          </li>
        </ul>
      </nav>
      {
        state.isOpen && <CartScreen/>
      }

    </header>
  )
}
  