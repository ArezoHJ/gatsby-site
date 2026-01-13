import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

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
        }
      }
    }
  `);

  const items = data.allContentfulPortfolioItem.nodes;

  return (
    <Layout>
      <h1>Min portfoliooooooooooooo</h1>
      <ul>
        {items.map(item => (
          <li key={item.slug}>
            <Link to={`/portfolio/${item.slug}`}>
              <h2>{item.title}</h2>
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
