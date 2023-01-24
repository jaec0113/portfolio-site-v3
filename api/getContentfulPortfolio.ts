export default class ContentfulApi {
  static async callContentfulApi(query: any) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }
    try {
      const data = await fetch(fetchUrl, fetchOptions).then((res) => res.json())
      return data
    } catch (err) {
      throw new Error("Could not fetch data from Contentful")
    }
  }

  static async getTotalPortfolioProjectsNumber() {
    const query = `
    {
      portfolioItemCollection {
        total
      }
    }`

    const res = await this.callContentfulApi(query)
    const totalPortfolioProjects = res.data.portfolioItemCollection.total
      ? res.data.portfolioItemCollection.total
      : 0

    return totalPortfolioProjects
  }

  static async getPortfolioProjects() {
    const query = `{
      portfolioItemCollection(order: dateCreated_DESC) {
        total
        items {
          sys {
            id
          }
          name
          slug
          clientName
          projectSummary
          dateCreated
          previewImage {
            url
          }
          techUsed
          tags
        }
      }
    }`

    const res = await this.callContentfulApi(query)

    const portfolioProjects = res.data.portfolioItemCollection
      ? res.data.portfolioItemCollection
      : { total: 0, items: [] }

    return portfolioProjects
  }
}
