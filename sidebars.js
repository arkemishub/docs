module.exports = {
  docs: [
    "docs/introduction",
    {
      type: "category",
      label: "Getting started",
      items: [
        "docs/getting-started/core-concepts",
        "docs/getting-started/installation",
      ],
    },
  ],
  api: [
    "api/cli/intro",
    {
      type: "category",
      label: "Frontend",
      items: [
        {
          type: "category",
          label: "Client JS",
          items: [
            "api/frontend/client-js/intro",
            {
              type: "link",
              label: "Api reference",
              href: "https://arkemishub.github.io/arke-monorepo/docs/",
            },
          ],
        },
        {
          type: "category",
          label: "React UI",
          items: [
            "api/frontend/react-ui/intro",
            {
              type: "link",
              label: "Storybook",
              href: "https://arkemishub.github.io/arke-monorepo/storybook/",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Backend",
      items: [
        {
          type: "link",
          label: "Hex packages",
          href: "https://hex.pm/users/arkemis",
        },
        {
          type: "category",
          label: "Endpoints API",
          link: {
            type: "generated-index",
            title: "Endpoints API",
            description: "This is a sample server Arke Phoenix server",
            slug: "/backend/endpoints/api",
          },
          items: require("./docs/api/backend/endpoints/sidebar.js"),
        },
      ],
    },
  ],
};
