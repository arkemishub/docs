---
id: get-units
title: getUnits()
---

`getUnits()` returns all `ArkeUnit` related to an `Arke`.


## Parameters

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for getting all `Arke` related `ArkeUnits`
* returns a list of `ArkeUnit` which has `ArkeUnitType[]` as type

## Example

```js
const units = await client.arke('my_arke').getUnits()
```

