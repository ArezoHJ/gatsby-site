import * as React from "react";
import "../styles/global.css";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ children }) => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulMenuItem(sort: {order: ASC}) {
              nodes {
                 label
                  order
                   page {
                       slug
                    }
                }
            }
        }
        
    `);


    const menuItems = data.allContentfulMenuItem.nodes;
    return (
        <html lang="en" className="dark">
            <body>
                 <header>
                     <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-100">
                     <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 p-8 md:p-12 lg:p-20">

                     
                        <Link
                        to="/"
                        className="text-2xl md:text-3xl text-white font-normal"
                         >
                            <div>
                             <StaticImage
                             src="../images/loggan.png"
                              alt="Arezo Jafari logotyp"
                              placeholder="blurred"
                              layout="constrained"
                               width={50}
                              />
                            </div>
                        </Link>

                     
            

               
              
                    <div
                    className="menu hidden md:block md:w-auto"
                    id="navbar"
                    >
                     <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {menuItems.map((item) => (
                      <li key={item.order}>
                        <Link
                        to={
                            item.page.slug === "/" || item.page.slug === ""
                            ? "/"
                            : `/${item.page.slug}`
                        }
                        className="hover:text-slate-200"
                        >
                            {item.label}
                        </Link>
                       </li>
                        ))}
                      </ul>
                     </div>
                    </div>
                    </nav>
                </header>

           
      
                <div className="pt-20">
                {children}
                </div>
          
            <footer className="mt-auto w-full border-t border-gray-300">
              <div className="flex justify-center py-6">
               <p className="text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} Designed by Arezo Hazara Jafari
               </p>
              </div>
            </footer>
        
            </body>
        </html>
    );
};

export default Layout;

export const Head = () => (
    <>
      <meta
        name="google-site-verification"
        content="OZx4F5TmW47sGaerQ_WCYu-Ar5qeke4NOGnkHwq3p_4"
      />
    </>
  );
  