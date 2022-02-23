---
id: get-group
title: getGroup()
---

`getGroup()` returns a `Group` detail


## Parameters

---
**group** *required* `string`

group id

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for getting a `Group` detail 
* returns detail of a `Group` which has `GroupType` as type

## Example

```js
const group = await client.getAllGroups('my_group')
```

