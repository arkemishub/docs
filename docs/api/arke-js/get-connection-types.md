---
id: get-connection-types
title: getConnectionTypes()
---

`getConnectionTypes()` returns all `ConnectionTypes`


## Parameters

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for getting all `ConnectionTypes` 
* returns a list of `ConnectionTypes` which has `ConnectionType[]` as type

## Example

```js
const connectionTypes = await client.getConnectionTypes()
```

