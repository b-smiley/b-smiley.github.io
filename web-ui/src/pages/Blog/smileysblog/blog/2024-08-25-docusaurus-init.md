---
slug: Adding Docusaurus Blog
title: Docusaurus in React GH Pages
date: 2024-08-25
authors: smiley
tags: [software]
---

A brief overview of how I got Docusaurus to work with React GitHub (GH) Pages.

<!-- truncate -->

# TLDR

- Docusaurus is a static site generator that uses markdown files to create a blog.

- Docusaurus can be treated as a separate project from React GH Pages. There will be two package.json files, one for the main website and one for the blog.

- Docusaurus can be integrated into React GH Pages by creating a new Docusaurus project and adding the build files to the React GH Pages project.

- Utilize linking to navigate between the main website and the blog. This can be done with the react-router-dom or window.location.href on the React side and docusaurus.config.js on the Docusaurus side.

# Steps

This is not an exhaustive list of steps, but a high level overview of the process I took to get Docusaurus to work with React GH Pages.

1. Have a pre-existing React GH Pages project. For more details on setting this up, see the [react gh-pages](https://github.com/gitname/react-gh-pages) repository.

2. Create a new Docusaurus project. I personally used the `npm init docusaurus@latest` command to get started. Make sure you place the sub-project in a organized location. I personally, have a pages folder for my main site, so I added a blog folder to the pages folder and placed the Docusaurus project there.

   For more details on setting this up, see the [Docusaurus](https://docusaurus.io/docs/installation) website.

3. When developing, you will have to run the main website on one port and the blog on another. To navigate between the two, you can create a custom script to help with this.

   Here is an example of navigating to the blog from the main website (assumes the main website is running on port 3000 and the blog is running on another port):

   ```javascript
   export function devProdRoute() {
     if (process.env.NODE_ENV === "production") {
       return "https://brendansmiley.com";
     } else {
       return "http://localhost:3000/";
     }
   }
   ```

4. **Developing the Blog**

   I found that the `docusaurus.config.js` is the most important file to understand how docusaurus works (as a complete beginner). This file is where you can set up blog settings and the routes. My main site is expecting the blog to be at `/blog`, so I set up the `docusaurus.config.js` to have the blog at `/blog`.

   Partial Content of `docusaurus.config.js`:

   ```javascript
   // docusaurus.config.js
   // Previous Code ...
   const config = {
     title: "Smiley's Blog",
     tagline: "It's not a bug, it's a feature! 🐞",
     favicon: "img/favicon.ico",
     url: "https://brendansmiley.com",
     baseUrl: "/blog/",
     // Remaining Code ...
   };
   ```

5. **Building and Deploying**

   I put the build files in the same location as the main website build files. This way, I can deploy the blog with the main website. Updating the default react-gh-pages deploy script as follows gives the `npm run deploy` command the ability to deploy the blog as well.

   ```javascript
   // package.json (Main Website)
   // ...
   "scripts": {
      "predeploy": "npm run build && npm run build:blog",
      // ...
      "deploy": "gh-pages -d build",
      // ...
      "build:blog": "cd src/pages/Blog/smileysblog && npm run build && mv build ../../../../build/blog"
   }
   // ..
   ```

# Summary

I hope this post helps you get started with Docusaurus in React GH Pages. I found the process to be fun but challenging as there is no abundance of resources on this topic. Enjoy!

# References

- [react gh-pages](https://github.com/gitname/react-gh-pages)
- [Docusaurus](https://docusaurus.io/)
- [ChatGPT](https://chatgpt.com/)
