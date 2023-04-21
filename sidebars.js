module.exports = {
  docsSidebar: [
    "introduction",
    "architecture",
    {
      type: 'category',
      label: 'Think Arke',
      items: [
        'think-arke/glossary',
        'think-arke/core-concepts',
      ],
    },{
      type: 'category',
      label: 'Tutorial',
      items: [
        'tutorial/installation',
        'tutorial/console',
        'tutorial/backend-starter',
        'tutorial/create-first-arke',
        'tutorial/customize-backend',
      ],
    },
    {
      type: 'category',
      label: 'Backend',
      items: [
        {
          type: 'link',
          label: 'Arke',
          href: 'https://hexdocs.pm/arke/',
        },{
          type: 'link',
          label: 'Arke Postgres',
          href: 'https://hexdocs.pm/arke_postgres/',
        },{
          type: 'link',
          label: 'Arke Auth',
          href: 'https://hexdocs.pm/arke_auth/',
        },{
          type: 'link',
          label: 'Arke Server',
          href: 'https://hexdocs.pm/arke_server/',
        },
        {
          type: 'category',
          label: 'Rest API',
          link: {
            type: 'generated-index',
            title: 'Rest API',
            description: 'This is a sample server Arke Phoenix server',
            slug: 'backend/rest/api',
          },
          items: require('./reference/backend/rest/sidebar.js'),
        },
      ],
    },
    {
      type: 'category',
      label: 'Frontend',
      items: [
        {
          type: 'link',
          label: 'Client JS',
          href: 'https://arkemishub.github.io/clientjs',
        },
        {
          type: 'link',
          label: 'UI Components',
          href: 'https://arkemishub.github.io/ui',
        },
        {
          type: 'link',
          label: 'Form',
          href: 'https://arkemishub.github.io/form',
        },
        {
          type: 'link',
          label: 'Table',
          href: 'https://arkemishub.github.io/table',
        },
        'frontend/crud'
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'deployment/using-docker',
        'deployment/using-kubernetes',
      ],
    },
    "faqs",
    "troubleshooting",
  ],
};
