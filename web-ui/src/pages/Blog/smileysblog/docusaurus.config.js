// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Smiley's Blog",
  tagline: "It's not a bug, it's a feature! 🐞",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://brendansmiley.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/blog/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "b-smiley", // Usually your GitHub org/user name.
  projectName: "Portfolio Website and Blog", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: "./sidebars.js",
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        blog: {
          routeBasePath: "posts",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          editUrl: "https://github.com/b-smiley/b-smiley.github.io",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/ProfilePicture.jpg",
      navbar: {
        title: "Smiley's Blog",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "/posts", label: "Posts", position: "left" },
          {
            href: "https://brendansmiley.com",
            label: "Main Site",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Website",
            items: [
              {
                label: "Home",
                href: "https://brendansmiley.com/",
              },
              {
                label: "Software",
                href: "https://brendansmiley.com/software",
              },
              {
                label: "Mechanical",
                href: "https://brendansmiley.com/mechanical",
              },
            ],
          },
          {
            title: "Social Media",
            items: [
              {
                label: "LinkedIn",
                to: "https://www.linkedin.com/in/brendan-s-9703ba193/",
              },
              {
                label: "Smiley's GitHub",
                href: "https://github.com/b-smiley",
              },
            ],
          },
          {
            title: "Built with Docusaurus",
            items: [
              {
                label: "Docusaurus GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Brendan Smiley. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
