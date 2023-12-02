
import styles from "@/styles/Home.module.scss"
import Image from "next/image"
import Link from "next/link"
export default function Footer  ()  {
  return (
    <footer className={styles.footer}>
      <Image priority quality={100} src={"https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/c10a9c1c-b69b-4955-9df8-5fa1854ad076___50dc4199e8020554de79a91123175966.svg"} alt="logo exito" width={80} height={80}/>
      <ul className={styles.app}>
        <p>
            Download the app free
        </p>
        <Link href="https://play.google.com/store/apps/details?id=com.exito.appcompania&hl=es_CO&gl=US">
          <Image priority quality={100} src="https://exitocol.vtexassets.com/_v/public/assets/v1/published/exito.footer@3.5.8/public/react/ea099afbf04ab86a9ca002352dcae2dd.png" alt='logo app' sizes="auto" width={50} height={50}/>
        </Link>
      </ul>
      <h4>Follow us</h4>
      <ul className={styles.partners}>
        <Link href="">
        </Link>
        <Link href="">
        </Link>
      </ul>
      <h4>Security pay</h4>
      <ul className={styles.partners}>
        <Link href="">
        </Link>
        <Image priority sizes="auto" quality={100} src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/0b526a1e-728b-4c25-a716-91d0d92bded6___fa9f09bfb21e7b0e90efbd41832f8430.png" alt='logo global pay' width={50} height={50}/>
        <Link href="">
          <Image  priority sizes="auto"quality={100} src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/dd2a15ce-635f-45b8-ab54-f4f40b2c25bb___8bd9c0f79a4a301f1fab4c087ce4d2b8.svg" alt='logo place to pay' width={50} height={50}/>
        </Link>
      </ul>
      <h4>Visit also:</h4>
      <ul className={styles.partners}>
        <Link href="https://www.carulla.com/">
          <Image  priority quality={100} src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/9c304441-8bd1-406a-b993-565607becfb5___5976f200a0237a0228796224ab41e7af.svg" alt='logo carrulla' width={50} height={50}/>
        </Link>
        <Link href="https://compra.ccviva.com/">
          <Image  priority quality={100} src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/ebdfa9db-8a49-4dbe-8c52-27b587ae780e___a79f826343204ac4f5b1c950f67cdcff.svg" alt='logo viva' width={50} height={50}/>

        </Link>
        <Link href="https://www.superinter.com.co/">
          <Image priority quality={100} src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/60f7bd9b-55d0-42df-aef5-e806926770d0___b42223108784f05c6cc60d92ce136504.svg" alt='logo surti inter' width={50} height={50}/>

        </Link>
        <Link href="https://www.surtimax.com.co/">
          <Image priority quality={100}  src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/90db0c66-db55-42ce-881e-3660ce8f6e6f___bccf98e6e64d5e73f0fe90e3c9dd482c.svg" alt='logo surti max' width={50} height={50}/>
        </Link>
      </ul>
      <p>Create with 💛 by Juan Pablo Bedoya V</p>
    </footer>
  )
}
