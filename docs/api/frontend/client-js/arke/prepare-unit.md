---
id: prepare-unit
title: prepareUnit()
---

`prepareUnit()` returns fields needed for creating a new `ArkeUnit`.


## Parameters

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for getting `ArkeUnit` fields
* return fields needed for creating a new `ArkeUnit` as `Field[]`

## Example

```js
const fields = await client.arke('my_arke').prepareUnit()
```

