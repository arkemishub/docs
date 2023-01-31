---
id: client-js
title: Client JS
---

Client JS is an isomorphic JavaScript client for Arke. Through the client SDK
you can use simplified methods to interact with the arke server.

## Install

First of all, you need to install the library:

```sh
npm install @arkejs/client
```

## Init your SDK

Then you're able to import the library and establish the connection with the server:

```js
import { initializeClient } from '@arkejs/client'

// Create a single arke js instance for interacting with your server
const getClient = () => initializeClient({
    serverUrl: process.env.ARKE_SERVER_URL,
    arkeProjectKey: 'test_project',
    auth: { cookieName: 'arke-auth' },
});
```

:::success
For react environment you can create a useful hooks `useClient` to get the client
```shell
export default function useClient() {
  return getClient();
}
```
:::

## Client Authentication

The auth class provides useful methods to authenticate, and manage the security of the APIs through the JWT authentication.

### Sign in

```js
client.auth
    .signIn({ username: 'username', password: 'password' })
    .then((res) => {
        const session = res.data.content;
        client.auth.setAuthCookie(session);
    })
    .catch((err) => console.log(err));
```

### Verify & Refresh token

To validate our session you have to call the verify token API to check that session is still alive, 
otherwise it will be necessary call the refresh token API to generate new token.

```js
 client.auth
    .verifyToken(verifyToken)
    .then((res) => {
        // Token is verified
    })
    .catch((err) => {
        // Token is expired -> try to refresh token
        client.auth
            .refreshToken(refresh_token)
            .then((res) => {
                const refreshedToken = res.data;
                console.log(refreshedToken)
            })
            .catch((err) => {
                // Logout session
                console.log(err)
            });
    })
```

Looks our guides to use Arke authentication through [NextAuth.js](https://next-auth.js.org/)

## Arke methods

The arke class provides useful methods to manage Arke and its associated parameters.

```shell
web.arke.[method]
```

| **Method**                                                  | **Description**                      |
|-------------------------------------------------------------|--------------------------------------|
| baseStruct(config)                                          | Get the structure of generic Arke    |
| getAll(config)                                              | Get All Arke                         |
| get(arkeId, config)                                         | Get specific Arke                    |
| struct(arkeId, config)                                      | Get the structure of a specific Arke |
| create(arkeId, data, config)                                | Create an Arke with data             |
| edit(arkeId, data, config)                                  | Edit a specific Arke                 |
| delete(arkeId, config)                                      | Delete a specific Arke               |
| addParameter(arkeId, parameterType, parameterId, config)    | Add parameter to an Arke             |
| removeParameter(arkeId, parameterType, parameterId, config) | Remove parameter to an Arke          |

:::warning
For config param see [Axios documentation](https://axios-http.com/docs/req_config)
:::

## Units methods

The arke class provides useful methods to manage Arke and its associated parameters.

```shell
web.unit.[method]
```

| **Method**                         | **Description**                      |
|------------------------------------|--------------------------------------|
| baseStruct(config)                 | Get the structure of generic Arke    |
| getAll(arkeId, config)             | Get All Units                        |
| get(arkeId, unitId, config)        | Get specific Unit                    |
| struct(arkeId, unitId, config)     | Get the structure of a specific Unit |
| create(arkeId, data, config)       | Create an Unit with data             |
| edit(arkeId, unitId, data, config) | Edit a specific Unit                 |
| delete(arkeId, unitId, config)     | Delete a specific Unit               |


## Offset & limits

For each `GET` methods on Arke, Units, Parameters etc. are available dedicated parameters
to limits the response 

```js
client.arke
    .getAll({ params: {
        offset: 0, 
        limit: 20,
    }})
    .then((res) => {
        // limit response to 20 Arke
    })
```

## Filters

For each `GET` methods on Arke, Units, Parameters etc. are available dedicated parameters
to filter the response through the logic operation

```js
client.arke
    .getAll({ params: {
        filter: `eq(arke_id,invoice)`,
    }})
    .then((res) => {
        // limit response to 20 Arke
    })
```

:::success
You can create more complex filters composing the filter in the following way:
```
filter: `or(contains(id,1),contains(label,test))`,
```
:::

## Sort

For each `GET` methods on Arke, Units, Parameters etc. is available a order parameters
to sort the response through the `asc` or `desc` order for a specific parameter

```js
client.arke
    .getAll({ params: {
        order: 'label;asc'
    }})
    .then((res) => {
        // get Arke sorted by label with ascended order
    })
```