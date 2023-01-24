import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/ui/portfolio-preview-card.module.css"

export function PreviewCard({ portfolioItem }: any) {
  const { name, slug, techUsed, projectSummary, tags, previewImage } =
    portfolioItem

  return (
    <article className={styles.cardArticle}>
      <Link href={slug}>
        <h3>{name}</h3>
        <p>
          Date: <span>01-01-2022</span>
        </p>
        <p>
          Client: <span>Client Name</span>
        </p>
        <p>
          Tech Stack: <span>{techUsed}</span>
        </p>
        <p>
          Summary: <span>{projectSummary}</span>
        </p>
        <Image src={previewImage.url} alt='alt text' width={250} height={250} />
      </Link>
    </article>
  )
}
