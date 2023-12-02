import styles from "@/styles/Products.module.scss"
import { CartIcon } from "@/components/Icons"

interface ButtonProps {
    title: string
    onClick: () => void
}
export default function Button  ({title, onClick}: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>{title} <strong>{CartIcon()}</strong> </button>
  )
}
