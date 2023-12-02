import styles from "@/styles/Checkout.module.scss"
import productButton from "@/styles/Products.module.scss"
import { CartContext } from "@/context/cart/CartContext"
import {  useContext, useEffect, useState } from "react"
import { ShippingIcon } from "../Icons"
export default function CheckoutForm  (){

  const { state } = useContext(CartContext)
  const [ubicacion, setUbicacion] = useState("")
  let url = ""
  const totalOrder = state.cart.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2)
  
  useEffect(() => {
    getCoordenadas()
  }, [])
  function getCoordenadas  () {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI"
      getUbicacion(url)
    }) 
  }
  async function getUbicacion(urlApi:string){
    const res = await fetch(urlApi)
    const {results} = await res.json()
    setUbicacion(results[0]?.formatted_address)
  }

  return(
    <form className={styles["form-checkout"]} >
      <section className={styles["form-checkout--user"]} >
        <div>
          <label className={styles["form-checkout--user--title"]} htmlFor="">Name</label>
          <input className={styles["form-checkout--user--input"]} type="text"placeholder="Full Name"/>
        </div>
        <div>
          <label className={styles["form-checkout--user--title"]} htmlFor="">Email</label>
          <input className={styles["form-checkout--user--input"]} type="text" placeholder="example@gmail.com"/>
        </div>
        <div>
          <label className={styles["form-checkout--user--title"]} htmlFor="">Phone</label>
          <input className={styles["form-checkout--user--input"]} type="text" placeholder="+57 3012429588"/>
        </div>
      </section>
      <label  className={styles["form-checkout--user--title"]}htmlFor="">Payment</label>
      <div>
        <label className={styles["form-checkout--user--title"]} htmlFor="">Credit Card Number: </label>
        <input className={styles["form-checkout--user--input"]} type="text" placeholder="xxxx-xxxx-xxxx-xxxx"/>
      </div>
      <section className={styles["form-checkout--user"]} >
        <div>
          <label className={styles["form-checkout--user--title"]} htmlFor="">Expiration: </label>
          <input className={styles["form-checkout--user--input"]} type="text" placeholder="MM/YYYY"/>
        </div>
        <div>
          <label className={styles["form-checkout--user--title"]} htmlFor="">CVV: </label>
          <input className={styles["form-checkout--user--input"]} type="text" placeholder="cvv"/>
        </div>
      </section>
      <section className={styles["form-checkout--user"]} >
        <div>
          <label className={styles["form-checkout--user--title"]} htmlFor="">Shipping Address</label>
          <input className={styles["form-checkout--user--input"]} type="text" value={ubicacion}/>
        </div>
        <div>
          <label className={styles["form-checkout--user--title"]} htmlFor="">Total: </label>
          <input className={styles["form-checkout--user--input"]} type="text" value={totalOrder}/>
        </div>
      </section>
      <button className={productButton.button}>Confirm Payment<strong>{ShippingIcon()}</strong></button>
    </form>
  )
}
