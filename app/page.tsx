import { Suspense } from "react"
import { PreviewCard } from "@/ui/portfolio/PreviewCard"
import ContentfulApi from "api/getContentfulPortfolio"
import styles from "@/styles/page-styles/Home.module.css"

export default async function HomePage() {
  const portfolioItems = await ContentfulApi.getPortfolioProjects()

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1>Tedd Chee</h1>
        <h3>CoffeeAje Designs</h3>
        <div>Hero image (coming soon)</div>
      </section>
      <Suspense fallback={<p>Loading...</p>}>
        <section className={styles.blogPortfolioItems}>
          {portfolioItems.items.map((portfolioItem: any) => (
            <PreviewCard
              key={portfolioItem.sys.id}
              portfolioItem={portfolioItem}
            />
          ))}
        </section>
      </Suspense>
    </div>
  )
}
