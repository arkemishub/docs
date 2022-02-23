---
id: prepare-arke
title: prepareArke()
---

`prepareArke()` returns fields needed for creating an `Arke`.


## Parameters

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for getting `Arke` fields
* returns fields needed for creating an `Arke` as `Field[]`

## Example

```js
const fields = await client.prepareArke()
```

