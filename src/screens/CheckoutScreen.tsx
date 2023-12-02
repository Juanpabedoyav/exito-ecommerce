import styles from "@/styles/Checkout.module.scss"
import CheckoutForm from "@/components/CheckoutForm"

export default function CheckoutScreen  () {
  return (
    <section className={styles["form-checkout-container"]}>
      <CheckoutForm />        
    </section>
  )
}
  
