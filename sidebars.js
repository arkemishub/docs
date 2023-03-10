module.exports = {
  reference: [
    'reference/introduction',
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'reference/getting-started/getting-started-cloud',
        'reference/getting-started/getting-started-docker',
        'reference/getting-started/getting-started-local-installation',
        'reference/getting-started/how-it-works',
      ],
    },
    {
      type: 'category',
      label: 'Server',
      items: [
        'reference/server/elixir',
        'reference/server/authentication',
        'reference/server/database',
        'reference/server/multi-tenant',
        'reference/server/permissions-and-roles',
        'reference/server/security',
        'reference/server/storage',
        {
          type: 'category',
          label: 'Rest API',
          link: {
            type: 'generated-index',
            title: 'Rest API',
            description: 'This is a sample server Arke Phoenix server',
            slug: '/reference/server/rest',
          },
          items: require('./reference/server/rest/sidebar.js'),
        },
      ],
    },
    {
      type: 'category',
      label: 'Web',
      items: [
        {
          type: 'link',
          label: 'Client JS',
          href: 'clientjs',
        },
        {
          type: 'link',
          label: 'UI Components',
          href: 'ui',
        },
        {
          type: 'link',
          label: 'Form',
          href: 'form',
        },
        {
          type: 'link',
          label: 'Table',
          href: 'table',
        },
        'reference/web/crud',
      ],
    },
    {
      type: 'category',
      label: 'Arke CLI',
      items: ['reference/cli/intro'],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'reference/deployment/using-docker',
        'reference/deployment/using-kubernetes',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        {
          type: 'link',
          label: 'Tutorial',
          href: 'https://reference.arkehub.com/tutorial',
        },
      ],
    },
    'reference/troubleshooting',
    'reference/faqs',
    'reference/glossary',
  ],
};
