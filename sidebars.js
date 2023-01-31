module.exports = {
  docs: [
    'docs/introduction',
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'docs/getting-started/getting-started-cloud',
        'docs/getting-started/getting-started-docker',
        'docs/getting-started/getting-started-local-installation',
        'docs/getting-started/how-it-works',
      ],
    },
    {
      type: 'category',
      label: 'Server',
      items: [
        'docs/server/elixir',
        'docs/server/authentication',
        'docs/server/database',
        'docs/server/multi-tenant',
        'docs/server/permissions-and-roles',
        'docs/server/security',
        'docs/server/storage',
        {
          type: 'category',
          label: 'Rest API',
          link: {
            type: 'generated-index',
            title: 'Rest API',
            description: 'This is a sample server Arke Phoenix server',
            slug: '/docs/server/rest',
          },
          items: require('./docs/docs/server/rest/sidebar.js'),
        },
      ],
    },
    {
      type: 'category',
      label: 'Web',
      items: ['docs/web/client-js', 'docs/web/ui-kit', 'docs/web/form'],
    },
    {
      type: 'category',
      label: 'Arke CLI',
      items: ['docs/cli/intro'],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'docs/deployment/using-docker',
        'docs/deployment/using-kubernetes',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        {
          type: 'link',
          label: 'Tutorial',
          href: 'https://docs.arkehub.com/tutorial',
        },
      ],
    },
    'docs/troubleshooting',
    'docs/faqs',
    'docs/glossary',
  ],
};
