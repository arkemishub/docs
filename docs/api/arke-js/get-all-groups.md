---
id: get-all-groups
title: getAllGroups()
---

`getAllGroups()` returns all `Groups`


## Parameters

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for getting all `Groups` 
* returns a list of `Groups` which has `GroupType[]` as type

## Example

```js
const groups = await client.getAllGroups()
```

