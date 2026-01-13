import * as React from "react";
import "../styles/global.css";
import { Link } from "gatsby";
import Layout from "../components/layout";


const IndexPage = () => (
 <Layout>
    <h1 className = "bg-red-500 text-white p-10">Min första Gatsby sida!</h1>
    <Link to="/portfolio">Besök min portfolio</Link>
 </Layout>
);

export const Head = () => <title>Hem</title>


export default IndexPage;