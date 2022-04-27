---
id: get-unit-configuration
title: getConfiguration()
---

`getConfiguration()` method returns the configuration of an `ArkeUnit`.


## Parameters

---

**config** `ApiRequestConfig`

api configuration object

---

## Notes

* performs an api call and retrieves `ArkeUnit` configuration
* returns a `json`

## Example

```js
const configuration = await client.arke('my_arke').unit(1).getConfiguration()
```

