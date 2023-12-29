import { Suspense } from "react"
import { PreviewCard } from "@/ui/portfolio/PreviewCard"
import ContentfulApi from "api/getContentfulPortfolio"
import { PageTitle } from "@/ui/components/PageTitle"
import styles from "@/styles/page-styles/Home.module.css"

export default async function HomePage() {
  const portfolioItems = await ContentfulApi.getPortfolioProjects()

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <PageTitle title='Tedd Chee' />
        <div>Hero image (coming soon)</div>
        <div>한글테스트</div>
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
