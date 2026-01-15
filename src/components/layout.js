import * as React from "react";
import { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";
import { useLocation } from "@reach/router";

const Layout = ({ children }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();


  const data = useStaticQuery(graphql`
    query {
      allContentfulMenuItem(sort: { order: ASC }) {
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

  const isActive = (slug) => {
    const path = slug === "/" || slug === "" ? "/" : `/${slug}`;
    return location.pathname.startsWith(path) ? "active" : "";
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);
  

  return (
    <>
       {/* OVERLAY */}
       {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
      
      {/* ===== MOBILE SLIDEOUT MENU ===== */}
      <div className={`slideout-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.order}>
              <Link
                to={
                  item.page.slug === "/" || item.page.slug === ""
                    ? "/"
                    : `/${item.page.slug}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="nav-inner">
          {/* LOGO */}
          <Link to="/" className="logo">
            <StaticImage
              src="../images/logo-new.png"
              alt="ArezoCoding logo"
              width={160}
            />
          </Link>

          {/* HAMBURGER (MOBILE) */}
          <button
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* DESKTOP MENU */}
          <ul className="nav-menu">
            {menuItems.map((item) => (
              <li key={item.order}>
                <Link
                  to={
                    item.page.slug === "/" || item.page.slug === ""
                      ? "/"
                      : `/${item.page.slug}`
                  }
                  className={isActive(item.page.slug)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="page-content">{children}</main>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Designed by Arezo Hazara Jafari
      </footer>
    </>
  );
};

export default Layout;
