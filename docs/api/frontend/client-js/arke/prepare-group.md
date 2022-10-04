---
id: prepare-group
title: prepareGroup()
---

`prepareGroup()` returns fields needed for adding an `Arke` a `Group`.


## Parameters

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for getting `Arke` related `Group` fields
* return fields needed for adding an `Arke` to a `Group` as `Field[]`

## Example

```js
const fields = await client.arke('my_arke').prepareGroup()
```

