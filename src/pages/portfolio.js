import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allContentfulPortfolioItem {
        nodes {
          slug
          title
          description {
            raw
          }
            image {
              gatsbyImageData(width: 600)
              title
            }
        }
      }
    }
  `);

  const items = data.allContentfulPortfolioItem.nodes;

  return (
    <Layout>
      <h1>My Portfolio</h1>
      <ul>
        {items.map(item => (
          <li key={item.slug}>
            <Link to={`/portfolio/${item.slug}`}>
              <h2>{item.title}</h2>

              {item.image && (
                 <GatsbyImage
                    image={getImage(item.image)}
                    alt={item.image.title || item.title}
                 />
              )}

              {item.description?.raw && (
                <div>{renderRichText(item.description)}</div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <title>Portfolio</title>;

export default PortfolioPage;
