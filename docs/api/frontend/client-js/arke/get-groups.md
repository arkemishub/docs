---
id: get-groups
title: getGroups()
---

`getGroups()` returns all `Groups` related to an `Arke`.


## Parameters

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for getting all `Groups` related to an `Arke`
* returns a list of `Groups` which has `GroupType[]` as type

## Example

```js
const groups = await client.arke('my_arke').getGroups()
```

