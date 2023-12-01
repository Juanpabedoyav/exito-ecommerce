import Link from "next/link"

export default function Header  ()  {
  return (
    <header>
      <nav>
        <Link href={"/"}>
          <h1>Next.js</h1>
        </Link>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
  