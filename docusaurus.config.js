module.exports = {
  title: "Arke Docs",
  tagline: "Arke documentation",
  url: "https://arkemishub.github.io",
  baseUrl: "/arke-docs/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logos/logo.ico",
  organizationName: "arkemishub", // Usually your GitHub org/user name.
  projectName: "arke-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    navbar: {
      title: "Arke",
      logo: {
        alt: "Arke logo",
        src: "img/logos/logo.svg",
      },
      items: [
        {
          to: "/docs/introduction",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "/api/arke-js/intro",
          activeBasePath: "api",
          label: "Frontend API",
          position: "left",
        },
        {
          to: "/backend/api",
          activeBasePath: "api",
          label: "Backend API",
          position: "left",
        },
        /*{
          to: "/showcase",
          activeBasePath: "showcase",
          label: "Showcase",
          position: "left",
        },*/
        /*{
          to: '/community',
          activeBasePath: 'community',
          label: 'Community',
          position: 'left',
        },*/
        {
          href: "https://github.com/arkemishub",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        /*{
          title: "Other Docs",
          items: [
            {
              label: "Link to other docs",
              to: "#",
            },
          ],
        },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Arkemis`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "docs",
          routeBasePath: "/",
          include: ["**/*.md", "**/*.mdx"],
          // Please change this to your repo.
          editUrl: "https://github.com/arkemishub/arke-docs",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock", "docusaurus-theme-openapi-docs"],
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          backend: {
            specPath: "openapi/openapi.yaml",
            outputDir: "docs/backend",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],
};
