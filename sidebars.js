module.exports = {
  docsSidebar: [
    "introduction",
    "architecture",
    {
      type: 'category',
      label: 'Think Arke',
      items: [
        'think-arke/core-concepts',
        'think-arke/data-modeling-flow',
      ],
    },{
      type: 'category',
      label: 'Your first App',
      items: [
        'tutorial/intro',
        'tutorial/console',
        'tutorial/frontend'
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/cli',
        'guides/create-arke',
        'guides/create-parameter',
        'guides/link-parameter',
        'guides/create-unit',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Advanced',
    //   items: [
    //     'advanced/create-enum',
    //     'advanced/query',
    //   ],
    // },
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
        'backend/rest'
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
