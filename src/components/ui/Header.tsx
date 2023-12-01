import styles from "@/styles/Home.module.scss"
import Link from "next/link"


export default function Header  ()  {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={"/"}>
          <h1>Next.js</h1>
        </Link>
        <ul>
          <li>Categories</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  )
}
  