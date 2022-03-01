---
id: delete-group
title: deleteGroup()
---

`deleteGroup()` deletes an `Arke` from a `Group`.


## Parameters

---
**group** *required* `string`

group id

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for deleting an `Arke` from a `Group`

## Example

```js
await client.arke('my_arke').deleteGroup('my_group')
```

