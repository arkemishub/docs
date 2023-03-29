module.exports = {
  docsSidebar: [
    "introduction",
    "architecture",
    "getting-started/getting-started-local-installation",
    {
      type: 'category',
      label: 'Backend',
      items: [
          'backend/elixir',
          'backend/database',
          'backend/authentication',
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
  ],
};
