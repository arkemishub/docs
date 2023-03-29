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
          'backend/authentication'
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
