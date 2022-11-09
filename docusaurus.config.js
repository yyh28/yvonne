// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Yvonne",
  tagline: ``,
  url: "https://yyh28.top",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) => defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          blogSidebarTitle: "全部博文",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: "",
        logo: {
          alt: "Yvonne Logo",
          src: "img/yvonne.png",
        },
        items: [
          {
            type: "doc",
            docId: "frontend/介绍",
            position: "left",
            label: "前端",
          },
          {
            type: "doc",
            docId: "backend/介绍",
            position: "left",
            label: "后端",
          },
          {
            type: "doc",
            docId: "devops/介绍",
            position: "left",
            label: "运维",
          },
          {
            type: "doc",
            docId: "others/介绍",
            position: "left",
            label: "其他",
          },
          { to: "/blog", label: "博客", position: "left" },
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://github.com/yyh28/yvonne",
            position: "right",
            label: "GitHub",
            className: "navbar-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © 2022-${new Date().getFullYear()} 闽ICP备2021014833号`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // Algolia 提供的应用 ID
        appId: "N57U6EED72",

        //  公开 API 密钥：提交它没有危险
        apiKey: "11a64105cfc3b5ee3edeea2893fff3ce",

        indexName: "yvonne",
        // 可选：见下文
        contextualSearch: true,

        // 可选：声明哪些域名需要用 window.location 型的导航而不是 history.push。 适用于 Algolia 配置会爬取多个文档站点，而我们想要用 window.location.href 在它们之间跳转时。
        externalUrlRegex: "external\\.com|domain\\.com",

        // 可选：Algolia 搜索参数
        searchParameters: {},

        // 可选：搜索页面的路径，默认启用（可以用 `false` 禁用）
        searchPagePath: "search",

        // ……其他 Algolia 参数
      },
    }),
};

module.exports = config;