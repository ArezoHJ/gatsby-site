import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const NotFoundPage = ({ data }) => {
  const page = data?.contentfulPage

  return (
    <Layout>
      <main style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <h1>{page?.title || "404"}</h1>

        {page?.body?.raw && (
          <div style={{ marginTop: "2rem" }}>
            {documentToReactComponents(JSON.parse(page.body.raw))}
          </div>
        )}
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const query = graphql`
  query NotFoundPage {
    contentfulPage(title: { eq: "Page not found" }) {
      title
      body {
        raw
      }
    }
  }
`
