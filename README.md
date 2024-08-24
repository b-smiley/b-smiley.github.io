# Brendan Smiley's Portfolio Website and Blog

[brendansmiley.com](https://brendansmiley.com)

Created with [React GH Pages](https://github.com/gitname/react-gh-pages)

# How to run locally

## Starting the Main Website

`cd web-ui`
`npm install`
`npm start`

## Starting the Blog

`cd web-ui/src/pages/Blog/smileysblog`
`npm install`
`npm start`

NOTE: Until future implementation, run the main website on port 3000 and the blog on port 3001. Custom scripts will help naviagte to the blog from the main website when developing locally.

# How to deploy

Manual Deploy - `npm run deploy`
GitHub Actions - Commit to Main branch for automatic deployment see [deploy.yml](.github/workflows/deploy.yml)

# Features

- [x] React GH Pages
- [x] 3D Model Viewer
- [x] Custom Domain
- [x] Docusaurus blog (using markdown)
- [x] GitHub Actions deployment

# Roadmap

- [ ] Add Google analytics
- [ ] Add a contact form
- [ ] Add a employment history section with a timeline

# NPM Packages Used

If you are looking to integrate any of these packages into your Github Page site, here is a list of some of the more challenges packages to integrate. This Github Page can be used as a reference.

- React - with backspace navigation
- Three.js - 3D Model Viewer
- Docusaurus - Markdown Blog
