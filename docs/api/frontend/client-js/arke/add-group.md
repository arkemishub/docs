---
id: add-group
title: addGroup()
---

`addGroup()` adds an `Arke` to a `Group`.


## Parameters

---
**group** *required* `string`

group id

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for adding an `Arke` a `Group`
* returns the assigned `Group` which has `GroupType` as type

## Example

```js
await client.arke('my_arke').addGroup('my_group')
```

