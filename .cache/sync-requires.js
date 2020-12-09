const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/yoko/Desktop/schoolHomePage/.cache/dev-404-page.js"))),
  "component---node-modules-lekoarts-gatsby-theme-cara-src-templates-cara-tsx": hot(preferDefault(require("/Users/yoko/Desktop/schoolHomePage/node_modules/@lekoarts/gatsby-theme-cara/src/templates/cara.tsx")))
}

