import { Hahmlet } from "next/font/google"
import { GlobalFooter } from "@/ui/global/GlobalFooter"
import { GlobalNav } from "@/ui/global/GlobalNav"
import "@/styles/globals.css"

const hahmlet = Hahmlet({
  weight: "400",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={hahmlet.className}>
      <head>
        <title>Tedd Chee</title>
      </head>
      <body
        style={{
          backgroundColor: "var(--primary-bg-color)",
          color: "var(--primary-text-color)",
        }}
      >
        <GlobalNav />
        <main>{children}</main>
        <GlobalFooter />
      </body>
    </html>
  )
}
