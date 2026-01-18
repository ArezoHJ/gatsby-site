import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {renderRichText} from "gatsby-source-contentful/rich-text";


const PortfolioItemPage = ({ data }) => {

    const item = data.contentfulPortfolioItem;
    

    return (
        <Layout>
            <h1>{item.title}</h1>
            <p>Slug: {item.slug}</p>

            {item.description && (
              <div>{renderRichText(item.description)}</div>
            )}

            {item.images?.map((img, index) => {
              const image = getImage(img);
              if (!image) return null;

              const isLCP = index === 0;

              return (
                <GatsbyImage
                  key={index}
                  image={image}
                  alt={img?.description || `${item.title} bild ${index + 1}`}
                  loading={isLCP ? "eager" : "lazy"}
                  priority={isLCP}
                  imageClassName="portfolio-image-img"
              />
              );
            })}
        </Layout>
    );
};



export const query = graphql`
query ($slug: String!){
  contentfulPortfolioItem(slug: {eq: $slug}) {
    title
    slug
    description{
    raw
    }
    images {
      description
      gatsbyImageData(
      layout: FULL_WIDTH
      placeholder: BLURRED
      formats: [AUTO, WEBP, AVIF]
       quality: 70
       )
    }
  }
}
`;

export const Head = ({data}) => (
  <title>{data.contentfulPortfolioItem.title}</title>
);

export default PortfolioItemPage;