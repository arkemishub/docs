module.exports = [
  { type: 'doc', id: 'api/backend/endpoints/arke-phoenix-starter' },
  {
    type: 'category',
    label: 'Unit',
    link: { type: 'doc', id: 'api/backend/endpoints/unit' },
    items: [
      {
        type: 'doc',
        id: 'api/backend/endpoints/create-unit',
        label: 'Create',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'api/backend/endpoints/get-units',
        label: 'All Units',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'api/backend/endpoints/get-unit',
        label: 'Read',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'api/backend/endpoints/update-unit',
        label: 'Update',
        className: 'api-method put',
      },
      {
        type: 'doc',
        id: 'api/backend/endpoints/delete-unit',
        label: 'Delete',
        className: 'api-method delete',
      },
    ],
  },
  {
    type: 'category',
    label: 'Link',
    link: { type: 'doc', id: 'api/backend/endpoints/link' },
    items: [
      {
        type: 'doc',
        id: 'api/backend/endpoints/get-connection',
        label: 'Unit Children',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'api/backend/endpoints/post-connection',
        label: 'Connection',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'api/backend/endpoints/delete-connection',
        label: 'Connection',
        className: 'api-method delete',
      },
    ],
  },
  {
    type: 'category',
    label: 'Struct',
    link: { type: 'doc', id: 'api/backend/endpoints/struct' },
    items: [
      {
        type: 'doc',
        id: 'api/backend/endpoints/get-arke-struct',
        label: 'Struct',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'api/backend/endpoints/get-unit-struct',
        label: 'Struct',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'Group',
    link: { type: 'doc', id: 'api/backend/endpoints/group' },
    items: [
      {
        type: 'doc',
        id: 'api/backend/endpoints/get-groups',
        label: 'Arke groups',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'api/backend/endpoints/get-group-struct',
        label: 'Group struct',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'api/backend/endpoints/get-unit-group',
        label: 'Unit list',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'api/backend/endpoints/get-arke-group',
        label: 'Arke list',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'api/backend/endpoints/get-unit-detail-group',
        label: 'Unit detail',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'Auth',
    link: { type: 'doc', id: 'api/backend/endpoints/auth' },
    items: [
      {
        type: 'doc',
        id: 'api/backend/endpoints/verify-token',
        label: 'Verify token',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'api/backend/endpoints/signin',
        label: 'Signin',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'api/backend/endpoints/signup',
        label: 'Signup',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'api/backend/endpoints/refresh-tokens',
        label: 'Refresh token',
        className: 'api-method post',
      },
    ],
  },
];
