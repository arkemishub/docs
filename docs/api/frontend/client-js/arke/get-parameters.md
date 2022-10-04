---
id: get-parameters
title: getParameters()
---

`getParameters()` returns all `Parameter` associated to an `Arke`.


## Parameters

---
**config** `ApiRequestConfig`

api configuration object

---


## Notes

* performs an api call for getting all `Parameter` associated to an `Arke`
* returns a list of `Parameter` which has `ParameterType[]` as type

## Example

```js
const parameters = await client.arke('my_arke').getParameters()
```

