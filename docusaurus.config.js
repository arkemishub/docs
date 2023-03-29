const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

module.exports = {
  title: 'Arke Docs',
  tagline: 'Arke documentation',
  url: 'https://arkemishub.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logos/logo.ico',
  organizationName: 'arkemishub', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    navbar: {
      title: '',
      logo: {
        alt: '',
        src: 'img/logos/logo.png',
      },
      items: [
        {
          to: '/docs/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        /*{
          href: 'https://github.com/arkemishub',
          label: 'Blog',
          position: 'left',
        },*/
        /*{
          to: '/tutorial',
          activeBasePath: 'tutorial',
          label: 'Tutorial',
          position: 'left',
        },*/
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
        /*{
          href: 'https://arkehub.com',
          position: 'right',
          label: 'Get started',
          className: 'button button--primary button--md header-cta-link',
        },*/
        {
          href: 'https://github.com/arkemishub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'reference',
          routeBasePath: '/',
          include: ['**/*.md', '**/*.mdx'],
          // Please change this to your repo.
          editUrl: 'https://github.com/arkemishub/arke-docs',
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/ApiItem', // Derived from docusaurus-theme-openapi
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock', 'docusaurus-theme-openapi-docs'],
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          endpoints: {
            specPath: 'openapi/openapi.yaml',
            outputDir: 'reference/backend/rest',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
        },
      },
    ],
  ],
};
