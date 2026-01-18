# Portfolio Website – Gatsby & Contentful

## 📌 Projektbeskrivning
Detta är en personlig portfoliowebbplats byggd med Gatsby och Contentful (Headless CMS).
Webbplatsen renderas med Static Site Generation (SSG).

## 🧠 Kursmål som uppfylls
- Skillnad mellan traditionellt CMS och Headless CMS
- Rendering med SSG
- Integration med Headless CMS (Contentful)
- Administration av innehåll via CMS
- Publicering av webbplats

## 🛠 Tekniker
- Gatsby
- React
- GraphQL
- Contentful
- Netlify
- Tailwind
- SSR

## 📄 Sidor
- Startsida
- Projektöversikt
- Enskild projektsida
- Om mig
- Kontakt
- 404-sida

## 🗂 Contentful
- Content Types:
  - Project (Portfolio Item)
  - Page
  - Navigation (Menu Item)
- Alla sidor och projekt hämtas dynamiskt från Contentful

## 🖼 Bilder
Bilder är optimerade med gatsby-plugin-image.

## 🚀 Deployment
Webbplatsen är deployad på Netlify och uppdateras automatiskt vid ändringar i Contentful.

## 🔗 Länkar
- Live site: https://arezohazarajafari.netlify.app
- GitHub repo: https://github.com/ArezoHJ/gatsby-site.git


## 🔧 Vidareutveckling (VG)

### SEO
Webbplatsen har god SEO och har analyserats med **Lighthouse i Google Chrome**.
Webbplatsen är registrerad i Google Search Console och sidorna har skickats för indexering.
Resultaten visar god prestanda inom:
- Performance
- Accessibility
- Best Practices
- SEO

För att ytterligare stärka sökmotoroptimeringen har webbplatsen även registrerats
och verifierats i **Google Search Console**. Sidorna har skickats in för indexering,
vilket säkerställer att webbplatsen kan upptäckas av sökmotorer.

### Server Side Rendering (SSR)
Projektet använder serverside-renderad funktionalitet i Gatsby genom användning
av Gatsby-API:t `onRenderBody`, där meta-taggar renderas på serversidan.
Detta har bland annat använts för verifiering mot Google Search Console.

Implementationen visar förståelse för hur SSR fungerar i praktiken samt hur
serverside-rendering kräver korrekt konfiguration vid deployment, exempelvis
vid publicering på Netlify.

### Vidareutveckling
Utöver grundkraven har webbplatsen vidareutvecklats med:
- dynamisk rendering av innehåll från Contentful
- optimerad bildhantering med Gatsby Image
- tydlig navigationsstruktur
- fokus på SEO, prestanda och användarupplevelse

Projektet visar att webbplatsen självständigt och med säkerhet har vidareutvecklats
med hjälp av Headless CMS.





<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Minimal Starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal)
