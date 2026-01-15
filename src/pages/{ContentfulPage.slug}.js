import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import PortfolioPage from "./portfolio";

const Page = ({ data }) => {
    const  page = data.contentfulPage;
    console.log("PAGE DATA:", page);

    if (page.slug ===  "portfolio"){
      return <PortfolioPage />;
    }

    return (
        <Layout>
            <h1>{page.title}</h1>


            {page.image && (
               <img
                   src={page.image.url}
                   alt={page.image.description || page.image.title}

               />
            )}
            
            {page.body && (
              <div>{renderRichText(page.body)}</div>
            )}
        </Layout>
    );
};

export default Page;

export const query = graphql`

query ($slug: String!) {
  contentfulPage(slug: {eq: $slug}) {
    title
    slug
    body {
      raw
    }
     image {
      url
      title
      description
    } 
  }
}
`;

export const Head = ({ data }) => {
  if (data.contentfulPage.slug === "portfolio"){
    return <title>portfolio</title>
  }

  return <title>{data.contentfulPage.title}</title>
};