import { Nanum_Gothic_Coding } from "@next/font/google"
import { GlobalFooter } from "@/ui/global/GlobalFooter"
import { GlobalNav } from "@/ui/global/GlobalNav"
import "@/styles/globals.css"

const nanumGothicCoding = Nanum_Gothic_Coding({
  weight: "400",
  subsets: ["latin", "korean"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={nanumGothicCoding.className}>
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
