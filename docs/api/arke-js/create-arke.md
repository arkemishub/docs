---
id: create-arke
title: createArke()
---

`createArke()` creates an `Arke`.


## Parameters

---
**payload** *required* `Record<string, unknown>`

arke payload

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for creating an `Arke`
* returns the created `Arke` which has `ArkeType` as type

## Example

```js
const arke = await client.createArke({ name: 'New Name' })
```

