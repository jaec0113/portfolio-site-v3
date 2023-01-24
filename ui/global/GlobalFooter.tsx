import Link from "next/link"
import Image from "next/image"

export function GlobalFooter() {
  return (
    <footer>
      <Link href='/about'>
        <Image
          src='/coffee-aje-logo-2-v2.png'
          alt='coffee aje designs logo'
          width={300}
          height={70}
        />
      </Link>
      <p>Copyright &copy; Tedd Chee 2022</p>
    </footer>
  )
}
