---
id: get-unit
title: get()
---

`get()` method returns the detail of an `ArkeUnit`.


## Parameters

---

**config** `ApiRequestConfig`

api configuration object

---

## Notes

* performs an api call and retrieves `ArkeUnit` detail
* returns an `ArkeUnit` detail of type `ArkeUnitType`

## Example

```js
const detail = await client.arke('my_arke').unit(1).get()
```

