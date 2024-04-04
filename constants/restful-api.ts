export const HEADERS_COLUMNS = [
    {value: 'key', label: 'Key'},
    {value: 'value', label:'Value'}
]
export const HEADERS_ROWS = [
    {key: 'arke-project-key', value: '<YOUR_PROJECT_ID>' },
    {key: 'Authorization', value: 'Bearer <ACCESS_TOKEN>' },
    {key: 'content-type', value: 'application/json' },
]

export const BODY_COLUMNS = [
    {value: 'key', label: 'Key'},
    {value: 'value', label:'Value'}
]

export const HTTP_RESPONSE_COLUMNS = [
    {value: 'status', label: 'Status code'},
    {value: 'description', label:'Description'}
]

export const HTTP_RESPONSE_ROWS = [
    {status: 200, description: 'OK' },
    {status: 401, description: 'Unauthorized' },
    {status: 500, description: 'Internal server error' }
]

export const HTTP_RESPONSE_ROWS_DELETE = [
    {status: 204, description: 'OK' },
    {status: 401, description: 'Unauthorized' },
    {status: 500, description: 'Internal server error' }
]
