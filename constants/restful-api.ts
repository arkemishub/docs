export const HEADERS_COLUMNS = [
  { value: "key", label: "Key" },
  { value: "value", label: "Value" },
];
export const HEADERS_ROWS = [
  { key: "arke-project-key", value: "<YOUR_PROJECT_ID>" },
  { key: "Authorization", value: "Bearer <ACCESS_TOKEN>" },
  { key: "content-type", value: "application/json" },
];

export const HEADERS_AUTH_ROWS = [
  { key: "arke-project-key", value: "<YOUR_PROJECT_ID>" },
  { key: "content-type", value: "application/json" },
];

export const PARAMS_COLUMNS = [
  { value: "key", label: "Key" },
  { value: "value", label: "Value" },
  { value: "url", label: "Detail" },
];
export const PARAMS_ROWS = [
  {
    key: "offset",
    value: "Start offset for pagination",
    url: "/restful-api/offset-limit",
  },
  {
    key: "limit",
    value: "Count limit for pagination",
    url: "/restful-api/offset-limit",
  },
  {
    key: "order",
    value: "Sorting definition ex. asc;updated_at",
    url: "/restful-api/order",
  },
  {
    key: "filter",
    value: "Filter response with condition ex. eq(name,test)",
    url: "/restful-api/filter",
  },
  {
    key: "load_links",
    value: "Load links data",
    url: "/restful-api/load_links",
  },
  {
    key: "depth",
    value: "Define depth of load_links",
    url: "/restful-api/depth",
  },
  // {key: 'load_values', value: 'Load values if a link exist', url: '/restful-api/load_values' },
];

export const BODY_COLUMNS = [
  { value: "key", label: "Key" },
  { value: "value", label: "Value" },
];

export const HTTP_RESPONSE_COLUMNS = [
  { value: "status", label: "Status code" },
  { value: "description", label: "Description" },
];

export const HTTP_RESPONSE_ROWS = [
  { status: 200, description: "OK" },
  { status: 401, description: "Unauthorized" },
  { status: 403, description: "Forbidden" },
  { status: 500, description: "Internal server error" },
];

export const HTTP_RESPONSE_ROWS_DELETE = [
  { status: 204, description: "OK" },
  { status: 401, description: "Unauthorized" },
  { status: 500, description: "Internal server error" },
];
