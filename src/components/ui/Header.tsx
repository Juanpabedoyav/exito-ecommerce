import styles from "@/styles/Home.module.scss"
import Image from "next/image"
import Link from "next/link"


export default function Header  ()  {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={"/"}>
          <Image src={"https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/c10a9c1c-b69b-4955-9df8-5fa1854ad076___50dc4199e8020554de79a91123175966.svg"} alt="logo exito" width={80} height={80}/>
        </Link>
        <ul>
          <li>Categories</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  )
}
  