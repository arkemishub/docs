module.exports = {
  docs: [
    "docs/introduction",
    {
      type: "category",
      label: "Getting started",
      items: [
        'docs/getting-started/core-concepts',
        'docs/getting-started/installation',
      ],
    },
  ],
  api: [
    "api/cli",
    {
      type: "category",
      label: "@arke/js",
      items: [
        "api/arke-js/intro",
        {
          type: "category",
          label: "arke",
          items: [
            "api/arke-js/arke/add-group",
            "api/arke-js/arke/add-parameter",
            "api/arke-js/arke/arke",
            "api/arke-js/arke/delete-group",
            "api/arke-js/arke/edit-arke",
            "api/arke-js/arke/get-arke",
            "api/arke-js/arke/get-groups",
            "api/arke-js/arke/get-parameters",
            "api/arke-js/arke/get-units",
            "api/arke-js/arke/prepare-arke",
            "api/arke-js/arke/prepare-group",
            "api/arke-js/arke/prepare-unit",
          ],
        },
      ],
    },
  ],
};
