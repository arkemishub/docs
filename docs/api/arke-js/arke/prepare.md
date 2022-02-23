---
id: prepare-arke-edit
title: prepare()
---

`prepare()` returns fields needed for editing current `Arke`.


## Parameters

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for getting `Arke` fields
* returns fields needed for editing current `Arke` as `Field[]`

## Example

```js
const fields = await client.arke('my_arke').prepare()
```

