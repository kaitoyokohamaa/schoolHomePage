const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/yoko/Desktop/schoolHomePage/.cache/dev-404-page.js"))),
<<<<<<< HEAD
  "component---node-modules-lekoarts-gatsby-theme-cara-src-templates-cara-tsx": hot(preferDefault(require("/Users/yoko/Desktop/schoolHomePage/node_modules/@lekoarts/gatsby-theme-cara/src/templates/cara.tsx")))
=======
  "component---src-pages-contact-tsx": hot(preferDefault(require("/Users/yoko/Desktop/schoolHomePage/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/yoko/Desktop/schoolHomePage/src/pages/index.tsx"))),
  "component---src-pages-member-tsx": hot(preferDefault(require("/Users/yoko/Desktop/schoolHomePage/src/pages/member.tsx")))
>>>>>>> 8da47afe9e27007f2813f577a424de26e66c9642
}

