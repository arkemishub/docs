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
            {
              type: "category",
              label: "parameter()",
              items: [
                "api/arke-js/arke/parameter/parameter",
                "api/arke-js/arke/parameter/delete-parameter",
                "api/arke-js/arke/parameter/edit-parameter",
                "api/arke-js/arke/parameter/get-parameter",
              ],
            },
            "api/arke-js/arke/prepare-arke-edit",
            "api/arke-js/arke/prepare-group",
            "api/arke-js/arke/prepare-unit",
            {
              type: "category",
              label: "unit()",
              items: [
                "api/arke-js/arke/unit/add-child",
                "api/arke-js/arke/unit/unit",
                "api/arke-js/arke/unit/get-unit",
                "api/arke-js/arke/unit/get-child",
                "api/arke-js/arke/unit/remove-child",
                "api/arke-js/arke/unit/get-unit-configuration",
                "api/arke-js/arke/unit/edit-unit-configuration",
              ],
            },
          ],
        },
        "api/arke-js/create-arke",
        "api/arke-js/get-all-arke",
        "api/arke-js/get-all-groups",
        "api/arke-js/get-all-parameters",
        "api/arke-js/get-connection-types",
        "api/arke-js/get-group",
        "api/arke-js/prepare-arke",
        "api/arke-js/prepare-groups",
      ],
    },
  ],
};
