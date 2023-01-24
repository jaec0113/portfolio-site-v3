let query

export const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`

export const fetchOptions = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query }),
}
