---
id: prepare-groups
title: prepareGroups()
---

`prepareGroups()` returns fields needed for creating a `Group`.


## Parameters

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for getting `Group` fields
* returns fields needed for creating a `Group` as `Field[]`

## Example

```js
const fields = await client.prepareGroups()
```

