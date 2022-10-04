module.exports = [
  { type: "doc", id: "api/backend/endpoints/arke-phoenix-starter" },
  {
    type: "category",
    label: "Auth",
    link: { type: "doc", id: "api/backend/endpoints/auth" },
    items: [
      {
        type: "doc",
        id: "api/backend/endpoints/verify-token",
        label: "Verify token",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/backend/endpoints/signin",
        label: "Signin",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/backend/endpoints/signup",
        label: "Signup",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/backend/endpoints/refresh-tokens",
        label: "Refresh token",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "Main",
    link: { type: "doc", id: "api/backend/endpoints/main" },
    items: [
      {
        type: "doc",
        id: "api/backend/endpoints/get-element",
        label: "Get children",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Unit",
    link: { type: "doc", id: "api/backend/endpoints/unit" },
    items: [
      {
        type: "doc",
        id: "api/backend/endpoints/get-unit",
        label: "Get",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api/backend/endpoints/create-unit",
        label: "Create",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/backend/endpoints/update-unit",
        label: "Edit",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "api/backend/endpoints/delete-unit",
        label: "Delete",
        className: "api-method delete",
      },
    ],
  },
  {
    type: "category",
    label: "Link",
    link: { type: "doc", id: "api/backend/endpoints/link" },
    items: [
      {
        type: "doc",
        id: "api/backend/endpoints/get-connection",
        label: "Get",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api/backend/endpoints/post-connection",
        label: "Create",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/backend/endpoints/delete-connection",
        label: "Delete",
        className: "api-method delete",
      },
    ],
  },
  {
    type: "category",
    label: "Group",
    link: { type: "doc", id: "api/backend/endpoints/group" },
    items: [
      {
        type: "doc",
        id: "api/backend/endpoints/group",
        label: "Group",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Parameter",
    link: { type: "doc", id: "api/backend/endpoints/parameter" },
    items: [
      {
        type: "doc",
        id: "api/backend/endpoints/parameter",
        label: "Parameter",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Struct",
    link: { type: "doc", id: "api/backend/endpoints/struct" },
    items: [
      {
        type: "doc",
        id: "api/backend/endpoints/get-struct",
        label: "Struct",
        className: "api-method get",
      },
    ],
  },
];
