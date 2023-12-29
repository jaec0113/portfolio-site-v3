import styles from "@/styles/page-styles/page-title.module.css"

type PageTitleProps = {
  title: string
}

export function PageTitle({ title }: PageTitleProps) {
  return <h1 className={styles.pageTitle}>{title}</h1>
}
