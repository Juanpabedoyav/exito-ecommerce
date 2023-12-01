import styles from "@/styles/Products.module.scss"

interface ButtonProps {
    title: string
    onClick: () => void
}
export default function Button  ({title, onClick}: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>{title}</button>
  )
}
